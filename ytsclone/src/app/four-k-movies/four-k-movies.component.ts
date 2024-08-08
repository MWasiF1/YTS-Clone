import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-four-k-movies',
  templateUrl: './four-k-movies.component.html',
  styleUrls: ['./four-k-movies.component.css']
})
export class FourKMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetch4KMovies();
  }

  fetch4KMovies(): void {
    this.movieService.get4KMovies().subscribe(
      (data: any) => {
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies;
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
