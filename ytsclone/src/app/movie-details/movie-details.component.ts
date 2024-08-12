import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  suggestions: any[] = [];
  movieId: string | null = null;
  currentResolution: string = '720p';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      if (this.movieId) {
        this.fetchSuggestions(this.movieId);
        this.getMovieDetails(this.currentResolution);
      }
    });
  }

  setResolution(resolution: string): void {
    this.currentResolution = resolution;
    this.getMovieDetails(resolution);
  }

  getMovieDetails(resolution: string): void {
    if (this.movieId) {
      const params = {
        with_images: true,
        with_cast: true,
        with_director: true,
        movie_id: this.movieId,
        resolution: resolution // Pass the resolution parameter
      };
      this.movieService.getMovieDetails(params).subscribe(
        (d: any) => {
          this.movie = d.data.movie;
          console.log(this.movie);
        },
        error => {
          console.error('Error fetching movie details:', error);
        }
      );
    }
  }

  fetchSuggestions(id: string): void {
    this.movieService.getMovieSuggestions(id).subscribe(
      response => {
        if (response && response.data && response.data.movies) {
          this.suggestions = response.data.movies;
          console.log('Suggestions Response:', this.suggestions);
        }
      },
      error => {
        console.error('Error fetching suggestions:', error);
      }
    );
  }
}
