import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signupView: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSignUpView () {
    this.signupView = !this.signupView
  };

}
