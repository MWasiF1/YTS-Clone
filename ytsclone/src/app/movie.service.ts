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


  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Searches for movies based on a query term.
   * @param query - The search term to filter movies
   * @returns An Observable containing the search results
   */
  searchMovies(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}?query_term=${encodeURIComponent(query)}`;  // Encode the query parameter
    return this.http.get<any>(searchUrl);  // Perform a GET request with the search query
  }

  /**
   * Fetches trending movies from the API.
   * @returns An Observable containing the trending movies data
   */
  getTrendingMovies(): Observable<any> {
    const trendingUrl = `${this.apiUrl}?sort_by=trending`;  
    return this.http.get<any>(trendingUrl);  // Perform a GET request to fetch trending movies
  }

  getMovieSuggestions(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/movies/${id}/suggestions`);
  }

  /**
   * Fetches 4K movies from the API.
   * @returns An Observable containing the 4K movies data
   */
  get4KMovies(): Observable<any> {
    const fourKUrl = `${this.apiUrl}?quality=2160p`;  
    return this.http.get<any>(fourKUrl);  // Perform a GET request to fetch 4K movies
  }
}
