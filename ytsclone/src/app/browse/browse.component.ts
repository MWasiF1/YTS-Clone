import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  movies: any[] = [];
  filteredMovies: any[] = [];
  searchQuery: string = '';
  selectedQuality: string = '';
  selectedGenre: string = '';
  selectedRating: string = '';
  selectedYear: string = '';
  selectedLanguage: string = '';
  selectedOrderBy: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      if (data && data.data && data.data.movies) {
        this.movies = data.data.movies;
        this.filteredMovies = this.movies;
      } else {
        console.error('Unexpected API response format:', data);
      }
    });
  }

  applyFilters(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const matchesQuery = this.searchQuery ? movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesQuality = this.selectedQuality ? movie.quality === this.selectedQuality : true;
      const matchesGenre = this.selectedGenre ? movie.genres.includes(this.selectedGenre) : true;
      const matchesRating = this.selectedRating ? movie.rating >= +this.selectedRating : true;
      const matchesYear = this.selectedYear ? movie.year === +this.selectedYear : true;
      const matchesLanguage = this.selectedLanguage ? movie.language === this.selectedLanguage : true;

      return matchesQuery && matchesQuality && matchesGenre && matchesRating && matchesYear && matchesLanguage;
    });

    if (this.selectedOrderBy) {
      this.filteredMovies.sort((a, b) => {
        if (this.selectedOrderBy === 'year') {
          return b.year - a.year;
        } else if (this.selectedOrderBy === 'rating') {
          return b.rating - a.rating;
        }
        return 0;
      });
    }
  }

  onFilterChange(): void {
    this.applyFilters();
  }
}
