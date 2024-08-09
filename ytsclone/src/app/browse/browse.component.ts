import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  
  movies: any[] = [];

  // Injecting the MovieService to fetch movie data
  constructor(private movieService: MovieService) { }

  // Lifecycle hook runs after component's initialization
  ngOnInit(): void {
    this.fetchMovies(); 
  }


  fetchMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      // Assign the fetched movie data to the movies array
      this.movies = data.data.movies;
    });
  }
}
