import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { __param } from 'tslib';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { get } from 'http';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  details = <any>[];
  itemType: string = '';
  itemId: string = '';
  constructor(private _tmdbService:TmdbService , private _route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.itemType = this._route.snapshot.params['type'];
    this.itemId = this._route.snapshot.params['id'];
    this.getDetails(this.itemType, this.itemId);
  }
  getDetails(type:string, id:string): void{
    this._tmdbService.getDetails(type, id).subscribe({
      next: (data) => {
        this.details = data;
        console.log(this.details);
      },
      error: (error) => {
        console.error('Error fetching details:', error);
      },
      complete: () => {
        console.log('Details fetched successfully');
      }
    })
  }
}
