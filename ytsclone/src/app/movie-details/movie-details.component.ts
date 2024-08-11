import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; // Make sure the import path is correct

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  genres: string[] = [];
  movie: any = {};
  suggestions: any[] = [];

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
        console.log('Movie Details Response:', response);
        this.movie = response.data.movie || {};
      },
      error => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  
  fetchSuggestions(id: string): void {
    this.movieService.getMovieSuggestions(id).subscribe(
      response => {
        console.log('Suggestions Response:', response);
        this.suggestions = response.data.movies || [];
      },
      error => {
        console.error('Error fetching suggestions:', error);
      }
    );
  }
  
  
}
