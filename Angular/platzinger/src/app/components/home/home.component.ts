import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[]
  query: string = ''
  userUid: string
  user: User
  friendEmail: string = ''

  constructor(private userService: UserService,
              private authService: AuthService,
              private modalService: NgbModal,
              private requestsService: RequestsService) {

    this.authService.getStatus().subscribe(status => {
      if (status)
        this.userUid = status.uid
    })

    this.userService.getUsers().valueChanges()
    .subscribe((data: User[]) => {
      this.friends = data
      this.user = this.friends.find(user => user.uid == this.userUid)
    }, err => {
      this.userService.handleFatalError(err)
    })
    
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  async sendRequest() {
    const request = {
      timestamp: Date.now(),
      receiver_email: this.friendEmail,
      sender: this.user.uid,
      status: 'pending'
    }

    try {
      await this.requestsService.createRequest(request)
      alert('Solicitud enviada')
    } catch (err) {
      this.requestsService.handleError(err)
    }
  }
}
