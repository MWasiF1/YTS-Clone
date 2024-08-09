import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';  

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  movies: any[] = [];  // Define the 'movies' property to hold the movie data

  constructor(private movieService: MovieService) {}  // Insert the MovieService into the component

  ngOnInit(): void {
    this.fetchMovies();  // Fetch movies when component initializes
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe(
      (data: any) => {
        // Check if the data structure is as expected
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies;  // Assign the movies data to the 'movies' property
        } else {
          console.error('Unexpected API response format:', data);  // Log an error if the data format is incorrect
        }
      },
      (error: any) => {
        console.error('Error fetching movies:', error);  // Log any error that occurs during the API request
      }
    );
  }
}


