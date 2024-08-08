import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://yts.mx/api/v2/list_movies.json';
  

  constructor(private http: HttpClient) { }

  

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}list_movies.json?sort_by=trending`);
  }

  get4KMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list_movies.json?sort_by=quality4K`);
  }
  
  
}