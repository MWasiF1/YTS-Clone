import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: any[] = []; 

  constructor(private movieService: MovieService) {} 

  ngOnInit(): void {
    this.fetchMovies(); 
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe(
      (data: any) => {
        
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies; 
        } else {
          console.error('Unexpected API response format:', data); 
        }
      },
      (error: any) => {
        console.error('Error fetching movies:', error); 
      }
    );
  }
}
