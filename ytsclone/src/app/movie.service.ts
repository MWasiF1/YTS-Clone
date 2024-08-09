import { Injectable } from '@angular/core';  // Import Injectable decorator to define the service
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  // Import Observable to handle asynchronous data

@Injectable({
  providedIn: 'root'  
})
export class MovieService {

  private apiUrl = 'https://yts.mx/api/v2/list_movies.json';  

  constructor(private http: HttpClient) { }  // Inject HttpClient into the service

  /**
   * Fetches a list of movies from the API.
   * @returns An Observable containing the movie data
   */
  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Perform a GET request to the API URL and return an Observable
  }

  /**
   * Searches for movies based on a query term.
   * @param query - The search term to filter movies
   * @returns 
   */
  searchMovies(query: string): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`);  // Perform a GET request with the search query
  }

  
  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?sort_by=trending`);  
  }

  
  get4KMovies(): Observable<any> {
    const fourKUrl = `${this.apiUrl}?quality=2160p`;  
    return this.http.get<any>(fourKUrl);
  }

}
