import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
  
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log('API Response:', data);  
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies;
        } else {
          console.error('Unexpected API response format:', data);
        }
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }
  
}



