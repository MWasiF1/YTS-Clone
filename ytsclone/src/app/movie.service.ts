import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://yts.mx/api/v2/list_movies.json';

  constructor(private http: HttpClient) { }

  /**
   * Fetches a list of movies from the API.
   * @returns An Observable containing the movie data
   */
  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  /**
   * Fetches movie details based on the provided movie ID.
   * @param id - The ID of the movie
   * @returns An Observable containing the movie details
   */
  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?movie_id=${id}`);
  }

  /**
   * Searches for movies based on a query term.
   * @param query - The search term to filter movies
   * @returns An Observable containing the search results
   */
  searchMovies(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}?query_term=${encodeURIComponent(query)}`;
    return this.http.get<any>(searchUrl);
  }

  /**
   * Fetches trending movies from the API.
   * @returns An Observable containing the trending movies data
   */
  getTrendingMovies(): Observable<any> {
    const trendingUrl = `${this.apiUrl}?sort_by=trending`;
    return this.http.get<any>(trendingUrl);
  }

  /**
   * Fetches movie suggestions based on the provided movie ID.
   * @param id - The ID of the movie
   * @returns An Observable containing movie suggestions
   */
  getMovieSuggestions(id: string): Observable<any> {
    const suggestionsUrl = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;
    return this.http.get<any>(suggestionsUrl);
  }

  /**
   * Fetches 4K movies from the API.
   * @returns An Observable containing the 4K movies data
   */
  get4KMovies(): Observable<any> {
    const fourKUrl = `${this.apiUrl}?quality=2160p`;
    return this.http.get<any>(fourKUrl);
  }

  /**
   * Fetches unique genres from the API.
   * @returns An Observable containing the list of genres
   */
  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?action=get_genres`);
  }

  /**
   * Fetches unique years from the API.
   * @returns An Observable containing the list of years
   */
  getYears(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}?action=get_years`);
  }

  /**
   * Fetches unique languages from the API.
   * @returns An Observable containing the list of languages
   */
  getLanguages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?action=get_languages`);
  }
}
