import { Injectable } from '@angular/core'
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
  
  setAvatar (avatar, uid) {
    return this.angularFireDatabase.object(`/users/${uid}/avatar`).set(avatar)
  }

  handleFatalError (err) {
    console.log('Faltal error in User service')
    console.log(err)
  }
}
