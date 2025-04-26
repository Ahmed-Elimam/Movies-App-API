import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { get } from 'http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [RouterLink],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {
  trendingPeople = <any>[]
  constructor(private _tmdbService:TmdbService){}
  ngOnInit(): void {
    this.getTrendingPeople()
}
  getTrendingPeople() {
    this._tmdbService.getTrendingPeople().subscribe({
      next: (data) => {
        this.trendingPeople = data.results;
      },
      error: (error) => {
        console.error('Error fetching peopl:', error);
      },
      complete: () => {
        console.log('people fetch complete');
      }
    })
  }
}