// browse.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

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
  genres: string[] = [];
  years: number[] = [];
  languages: string[] = [];
  isLoading: boolean = true;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.fetchMovies();
    this.fetchFilterOptions();
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      this.isLoading = false;
      if (data && data.data && data.data.movies) {
        this.movies = data.data.movies;
        this.filteredMovies = [...this.movies];
        this.applyFilters(); // Apply default filters
      } else {
        console.error('Unexpected API response format:', data);
      }
    });
  }

  fetchFilterOptions(): void {
    this.movieService.getGenres().subscribe(genres => {
      this.genres = genres;
    });

    this.movieService.getYears().subscribe(years => {
      this.years = years;
    });

    this.movieService.getLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

  applyFilters(): void {
    console.log('Applying filters with:', {
      searchQuery: this.searchQuery,
      selectedQuality: this.selectedQuality,
      selectedGenre: this.selectedGenre,
      selectedRating: this.selectedRating,
      selectedYear: this.selectedYear,
      selectedLanguage: this.selectedLanguage,
      selectedOrderBy: this.selectedOrderBy,
    });

    this.filteredMovies = this.movies.filter(movie => {
      const matchesQuery = this.searchQuery ? (
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        movie.quality.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        movie.genres.some((genre: string) => genre.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        movie.rating.toString().includes(this.searchQuery) ||
        movie.year.toString().includes(this.searchQuery) ||
        movie.language.toLowerCase().includes(this.searchQuery.toLowerCase())
      ) : true;

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

  viewMovieDetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }
}
