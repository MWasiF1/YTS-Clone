import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: any[] = [];  // Array to hold the list of movies fetched from the API
  query: string = '';  // Search query string

  // Inject ActivatedRoute and MovieService into the component
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  // On component initialization, fetch the query parameter and search for movies
  ngOnInit(): void {
    // Subscribe to query parameters to get the search query
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];  // Extract the query parameter
      this.searchMovies();  // Call the method to search movies
    });
  }

  // Method to search movies using the movieService
  searchMovies(): void {
    // Call the searchMovies method of MovieService and subscribe to the observable
    this.movieService.searchMovies(this.query).subscribe(data => {
      // Check if data and the movies array are present
      if (data && data.data && data.data.movies) {
        this.movies = data.data.movies;  // Assign the movies array to the component's movies property
      } else {
        console.error('Unexpected API response format:', data);  // Log an error if data format is not as expected
      }
    }, error => {
      console.error('Error fetching movies:', error);  // Log an error if the API request fails
    });
  }
}
