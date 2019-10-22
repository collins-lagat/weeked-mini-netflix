import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IMovie } from 'src/app/models/movie.model';
import { ISeries } from 'src/app/models/series.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlist: IMovie | ISeries;
  deleteIcon;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.watchlist = user.watchlist;
      this.deleteIcon = faTrash;
    });
  }

  handleDelete(data: IMovie | ISeries) {
    this.userService.removeFromWatchlist(data)
  }

}
