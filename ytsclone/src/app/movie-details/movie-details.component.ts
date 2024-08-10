import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; // Adjust the import path if needed

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any; // Replace 'any' with the appropriate interface or type if available
  suggestions: any[] = []; // Initialize as an empty array

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService // Adjust if you use a different service
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.fetchMovieDetails(movieId);
      this.fetchSuggestions(movieId);
    });
  }

  fetchMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe(response => {
      this.movie = response.data.movie; // Adjust based on your API response structure
    });
  }

  fetchSuggestions(id: string): void {
    this.movieService.getMovieSuggestions(id).subscribe((response: any) => {
      // Assuming response is an array of movies directly
      this.suggestions = response.data?.movies || []; // Default to empty array if data or movies are undefined
    });
  }

  getSuggestions(id: string): void {
    // This method may be used for additional logic if needed
    console.log('Fetching suggestions for movie ID:', id);
    this.fetchSuggestions(id);
  }
}
