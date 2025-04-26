import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjJlMGM5Yjk3MjEzODY2MTM2ZGQxZTRlNjBkYzU2NSIsIm5iZiI6MTc0NTY3MjQwNC41NTcsInN1YiI6IjY4MGNkOGQ0MTYzNWQyOTE4YzgwZDkxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6ngYKNEil9E6hump3b1mWlzSmuSdgQWKEFOz6IBOEI";
  constructor(private _httpClient:HttpClient) { 
  }
  getAllTrending(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });
    return this._httpClient.get('https://api.themoviedb.org/3/trending/all/day?language=en-US',{headers})
  }

}
