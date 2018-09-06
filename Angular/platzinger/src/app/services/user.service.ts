import { Injectable } from '@angular/core'
import { User } from '../interfaces/user'
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private angularFireDatabase: AngularFireDatabase) {}

  getUsers () {
    return this.angularFireDatabase.list('/users')
  }

  getUserById (uid) {
    return this.angularFireDatabase.object(`/users/${uid}`)
  }

  createOrUpdateUser (user) {
    return this.angularFireDatabase.object(`/users/${user.uid}`).set(user)
  }
  
  handleFatalError (err) {
    console.log('Faltal error in User service')
    console.log(err)
  }
}
