import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {

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
}
