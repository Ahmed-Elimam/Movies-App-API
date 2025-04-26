import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { TmdbService } from '../../services/tmdb.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all',
  imports: [RouterLink],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit {
  allTrending = <any>[]
  constructor(private _tmdbService:TmdbService){}
  
  ngOnInit(): void {
     this._tmdbService.getAllTrending().subscribe({
      next: (data) => {
        this.allTrending = data.results;},
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
      complete: () => {
        console.log('Movie fetch complete');
      }})

    }
}
