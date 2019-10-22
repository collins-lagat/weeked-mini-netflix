import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  selectedIndex: number;
  tabs = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Series',
      route: '/series-home'
    },
    {
      name: 'Movies',
      route: '/movies-home'
    }
  ];

  constructor(private router: Router,) { }

  ngOnInit() {
    this.selectedIndex = 0;
  }
  handleTabChange(index): void {
    this.router.navigate([this.tabs[index].route]);
  }

}
