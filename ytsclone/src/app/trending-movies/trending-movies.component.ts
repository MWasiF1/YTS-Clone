import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies(): void {
    this.movieService.getTrendingMovies().subscribe(
      (data: any) => {
        
        console.log('Trending Movies:', data);
        if (data && data.data && data.data.movies) {
          this.trendingMovies = data.data.movies;
        } else {
          console.error('Unexpected API response format:', data);
        }
      },
      (error: any) => {
        
        console.error('Error fetching trending movies:', error);
      }
    );
  }
}
