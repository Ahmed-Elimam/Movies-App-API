import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjJlMGM5Yjk3MjEzODY2MTM2ZGQxZTRlNjBkYzU2NSIsIm5iZiI6MTc0NTY3MjQwNC41NTcsInN1YiI6IjY4MGNkOGQ0MTYzNWQyOTE4YzgwZDkxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6ngYKNEil9E6hump3b1mWlzSmuSdgQWKEFOz6IBOEI";
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apiKey}`});

  constructor(private _httpClient:HttpClient) { 
  }
  getAllTrending(): Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/all/day?language=en-US',{headers:this.headers})
  }
  getTrendingMovies(): Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US',{headers:this.headers})
  }
  getTrendingTV(): Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US',{headers:this.headers})
  }
  getTrendingPeople(): Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/person/day?language=en-US',{headers:this.headers})
  }
  getDetails(type:string, id:string): Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`,{headers:this.headers})
  }
}
