import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv',
  imports: [RouterLink],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
  trendingTvShows = <any>[]
  constructor(private _tmdbService: TmdbService) {}
  ngOnInit(): void {
    this.getTrendingTvShows()
  }

  getTrendingTvShows() {
    this._tmdbService.getTrendingTV().subscribe({
      next: (data) => {
        this.trendingTvShows = data.results;
      },
      error: (error) => {
        console.error('Error fetching TV shows:', error);
      },
      complete: () => {
        console.log('TV shows fetch complete');
      }
    })
  }
}
