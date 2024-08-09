import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']  
})
export class HomeComponent implements OnInit {
  movies: any[] = [];  

  constructor(private movieService: MovieService) {}  // Dependency injection of MovieService

  ngOnInit(): void {
    
    this.fetchMovies();  
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        // Handle the API response
        console.log('API Response:', data);  // Log the response for debugging
        if (data && data.data && data.data.movies) {
          // Check if the response format is as expected
          this.movies = data.data.movies;  // Assign movies to the component's property
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
