import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[]
  constructor() { 
    let user1: User = {
      nick: 'Juan',
      age: 28,
      email: 'juandlopez@msn.com',
      friend: true,
      uid: 1,
      status: 'online'
    }
    let user2: User = { 
      nick: 'Eduardo',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'eduardo@platzi.com',
      friend: true,
      uid: 2,
      status: 'offline'
    }
    let user3: User = {
      nick: 'Yuliana',
      subnick: 'Mi mensaje personal',
      age: 25,
      email: 'yuliana@platzi.com',
      friend: true,
      uid: 3,
      status: 'busy'
    }
    let user4: User = {
      nick: 'Freddy',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'freddy@platzi.com',
      friend: false,
      uid: 4,
      status: 'away'
    }

    this.friends = [user1, user2, user3, user4]
  }

  getFriends() {
    return this.friends
  }
}
