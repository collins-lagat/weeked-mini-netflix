import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faListUl, faCog } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  homeIcon;
  searchIcon;
  watchlistIcon;
  settingsIcon;

  constructor(private router: Router) { }

  ngOnInit() {
    this.homeIcon = faHome;
    this.searchIcon = faSearch;
    this.watchlistIcon = faListUl;
    this.settingsIcon = faCog;
  }

  handleNav(route) {
    this.router.navigate(route);

  }

}
