import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  handleSignOut(): void {
    this.authService.logout();
  }

}
