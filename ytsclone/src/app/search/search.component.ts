import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.searchMovies();
    });
  }

  searchMovies(): void {
    this.movieService.searchMovies(this.query).subscribe(
      (data) => {
        if (data && data.data && data.data.movies) {
          this.movies = data.data.movies;
        } else {
          console.error('Unexpected API response format:', data);
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
