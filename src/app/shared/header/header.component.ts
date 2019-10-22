import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() addBack = false;
  backIcon;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.backIcon = faArrowLeft;
  }
  goBack() {
    this._location.back();
  }

}
