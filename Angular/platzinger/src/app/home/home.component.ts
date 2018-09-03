import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[]

  constructor() {
    let user1: User = {
      nick: 'Juan',
      age: 28,
      email: 'juandlopez@msn.com',
      friend: true,
      uid: 1
    }
    let user2: User = { 
      nick: 'Eduardo',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'eduardo@platzi.com',
      friend: true,
      uid: 2
    }
    let user3: User = {
      nick: 'Yuliana',
      subnick: 'Mi mensaje personal',
      age: 25,
      email: 'yuliana@platzi.com',
      friend: true,
      uid: 3
    }
    let user4: User = {
      nick: 'Freddy',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'freddy@platzi.com',
      friend: false,
      uid: 4
    }

    this.friends = [user1, user2, user3, user4]
  }

  ngOnInit() {
  }

}
