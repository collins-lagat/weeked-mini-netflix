import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedIndex: number;
  tabs = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Series',
      route: '/series'
    },
    {
      name: 'Movies',
      route: '/movies'
    }
  ];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.selectedIndex = 0;
  }

  handleTabChange(index): void {
    this.router.navigate([this.tabs[index].route]);
  }

  handleSignOut(): void {
    this.authService.logout()
  }

}
