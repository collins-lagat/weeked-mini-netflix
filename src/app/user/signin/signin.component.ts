import { Component, OnInit } from '@angular/core';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  emailIcon;
  passwordIcon;
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.emailIcon = faEnvelope;
    this.passwordIcon = faLock;
    this.email = environment.defaultUser.email;
    this.password = environment.defaultUser.password;
  }

  handleSignIn() {
    this.auth.sigIn(this.email, this.password)
  }

}
