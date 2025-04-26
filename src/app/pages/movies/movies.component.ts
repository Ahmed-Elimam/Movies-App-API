import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
trendingMovies = <any>[]
  constructor(private _tmdbService:TmdbService){}
  
  ngOnInit(): void {
     this._tmdbService.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;},
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
      complete: () => {
        console.log('Movie fetch complete');
      }})

    }
}
