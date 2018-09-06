import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login'
  email: string = null
  password: string = null
  nick: string = null

  constructor(private authService: AuthService, 
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  async login () {
    try {
      const data = await this.authService.LoginWithEmail(this.email, this.password)
      alert('Loggeado correctamente')
      console.log(data)
      this.router.navigate(['home'])
    } catch (err) {
      this.authService.handleFatalError(err)
    }
  }

  async register () {
    let user = {}
    try {
      const data = await this.authService.registerWithEmail(this.email, this.password)
      user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick
      }
    } catch (err) {
      this.authService.handleFatalError(err)
    }

    try {
      const data = await this.userService.createOrUpdateUser(user)
      alert('Usuario registrado satisfactoriamente')
      this.password = 'login'
    } catch (err) {
      this.userService.handleFatalError(err)
    }

  }

  async loginWithFacebook () {
    try {
      const data = await this.authService.loginWithFacebook()
      alert('Logged with facebook successful!')
      console.log(data)
    } catch (err) {
      this.authService.handleFatalError(err)
    }
  }
}
