import { Component, OnInit } from '@angular/core';
import {Person, StartPageService} from './start-page.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  lastResponse: string;
  persons: Person[];
  persons2: Person[];
  userName: '';
  userPassword: '';
  registrationError: string;
  constructor(private startPageService: StartPageService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.startPageService.getUsers().subscribe(
      persons => {
        this.persons = persons;
        this.persons2 = persons;
      }
    );
  }

  register() {
    if (this.userName === '') { return; }
    if (this.userPassword === '') { return; }
    this.persons[0].nameous = this.userName;
    this.persons[0].passwordious = this.userPassword;
    this.userName = '';
    this.userPassword = '';

    this.startPageService.registerNewUser(this.persons[0]).subscribe( response => {
      this.lastResponse = response.body.toString();
      if (this.lastResponse === 'CONFLICT') {
        this.registrationError = 'Данный логин уже занят';
      }else {
        this.registrationError = 'Пользователь успешно зарегестрирован';
      }
      console.log(this.lastResponse);
    });
    this.lastResponse = '';
  }
  auth() {
    if (this.userName === '') { return; }
    if (this.userPassword === '') { return; }
    this.persons2[0].nameous = this.userName;
    this.persons2[0].passwordious = this.userPassword;
    this.userService.setUsername(this.userName);
    this.userName = '';
    this.userPassword = '';

    this.startPageService.authUser(this.persons2[0]).subscribe( response => {
      this.lastResponse = response.body.toString();
      if (this.lastResponse === 'NOT_FOUND') {
          this.registrationError = 'Пользователя с таким именем не существует';
      }
      if (this.lastResponse === 'EXPECTATION_FAILED') {
        this.registrationError = 'Пароль введён неверно';
      }
      if (this.lastResponse === 'FOUND') {
        this.registrationError = 'Ну а тут всё четка';
        this.userService.setIsUserLoggedIn(true);
        this.router.navigate(['/main']);
      }
      console.log(this.lastResponse);
    });
    this.lastResponse = '';
  }
}
