import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; // Ensure the import path is correct

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any = []; // For single movie details
  suggestions: any[] = []; // For movie suggestions

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService // Ensure this service is correctly imported and provided
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.fetchMovieDetails(movieId);
      this.fetchSuggestions(movieId);
    });
  }

  fetchMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe(
      response => {
        if (response && response.data && response.data.movie) {
          this.movie = response.data.movie; // Correctly set the movie details
          console.log('Movie Details Response:', this.movie);
        }
      },
      error => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  
  fetchSuggestions(id: string): void {
    this.movieService.getMovieSuggestions(id).subscribe(
      response => {
        if (response && response.data && response.data.movies) {
          this.suggestions = response.data.movies; // Correctly set the movie suggestions
          console.log('Suggestions Response:', this.suggestions);
        }
      },
      error => {
        console.error('Error fetching suggestions:', error);
      }
    );
  }
}
