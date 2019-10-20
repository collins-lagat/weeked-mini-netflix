import { Component, OnInit } from '@angular/core';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  emailIcon;
  passwordIcon;

  constructor() { }

  ngOnInit() {
    this.emailIcon = faEnvelope;
    this.passwordIcon = faLock;
  }

}
