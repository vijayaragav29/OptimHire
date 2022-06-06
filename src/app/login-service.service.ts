import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  userName:any= 'a@a.com';
  password:any = '123';
  userList:any = [
  ];
  constructor() {
    for (let index = 0; index < 25; index++) {
      this.userList.push(
        { name: 'user' + (index + 1), id: Math.random() }
      );
    }

  }

  getUserList() {
    return this.userList;
  }

  login(userName:any, password:any): any {
    if (userName === this.userName && password === this.password) {
      return true;
    } else {
      return false;
    }
  }
}
