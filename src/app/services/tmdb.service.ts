import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from  '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = environment.apiKey;
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
