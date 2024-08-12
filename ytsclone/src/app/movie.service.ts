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
    const searchUrl = `${this.apiUrl}?query_term=${encodeURIComponent(query)}`;
    return this.http.get<any>(searchUrl);
  }

 
  getTrendingMovies(): Observable<any> {
    const trendingUrl = `${this.apiUrl}?sort_by=trending`;
    return this.http.get<any>(trendingUrl);
  }

  getMovieSuggestions(id: string): Observable<any> {
    const suggestionsUrl = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;
    return this.http.get<any>(suggestionsUrl);
  }

  
  get4KMovies(): Observable<any> {
    const fourKUrl = `${this.apiUrl}?quality=2160p`;
    return this.http.get<any>(fourKUrl);
  }

  
  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?action=get_genres`);
  }

  getYears(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}?action=get_years`);
  }

  
  getLanguages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?action=get_languages`);
  }
  getMovieDetails(params:any) {
    return this.http.get(`https://yts.mx/api/v2/movie_details.json`, { params: params});
  }
}
