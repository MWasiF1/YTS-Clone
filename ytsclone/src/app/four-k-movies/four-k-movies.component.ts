import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-four-k-movies',
  templateUrl: './four-k-movies.component.html',
  styleUrls: ['./four-k-movies.component.css'] 
})
export class FourKMoviesComponent implements OnInit {
  movies: any[] = []; 
  constructor(private movieService: MovieService) {} // Injecting the MovieService to fetch movie data

  ngOnInit(): void {
    this.fetch4KMovies(); 
  }

  fetch4KMovies(): void {
    // Method to fetch 4K movies from the MovieService
    this.movieService.get4KMovies().subscribe(
      (data: any) => { // Handle the response from the API
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies; // Assign the fetched movies to the component's movies array
        } else {
          console.error('Unexpected API response format:', data); 
        }
      },
      error => {
        console.error('Error fetching 4K movies:', error); 
      }
    );
  }
}
