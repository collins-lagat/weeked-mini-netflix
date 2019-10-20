import { Component, OnInit } from '@angular/core';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userIcon;
  emailIcon;
  passwordIcon;

  constructor() { }

  ngOnInit() {
    this.userIcon = faUser;
    this.emailIcon = faEnvelope;
    this.passwordIcon = faLock;
  }

}
