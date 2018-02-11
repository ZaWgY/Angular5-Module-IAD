import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;
  constructor() {
    this.isUserLoggedIn = false;
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setIsUserLoggedIn(flag) {
    this.isUserLoggedIn = flag;
  }

  setUsername(name) {
    this.username = name;
  }

  getUsername() {
    return this.username;
  }
}
