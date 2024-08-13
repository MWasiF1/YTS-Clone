import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
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
  searchResults: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.fetchMovies();
    this.fetchFilterOptions();
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.isLoading = false;
      if (data && data.data && data.data.movies) {
        this.movies = data.data.movies;
        this.filteredMovies = [...this.movies];
        this.applyFilters();
      } else {
        console.error('Unexpected API response format:', data);
      }
    });
  }

  fetchFilterOptions(): void {
    this.movieService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });

    this.movieService.getYears().subscribe((years) => {
      this.years = Array.isArray(years) ? years : []; 
    });

    this.movieService.getLanguages().subscribe((languages) => {
      this.languages = Array.isArray(languages) ? languages : []; 
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

    this.filteredMovies = this.movies.filter((movie) => {
      const matchesQuery = this.searchQuery
        ? movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          movie.quality
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          movie.genres.some((genre: string) =>
            genre.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) ||
          movie.rating.toString().includes(this.searchQuery) ||
          movie.year.toString().includes(this.searchQuery) ||
          movie.language.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesQuality = this.selectedQuality
        ? movie.quality === this.selectedQuality
        : true;
      const matchesGenre = this.selectedGenre
        ? movie.genres.includes(this.selectedGenre)
        : true;
      const matchesRating = this.selectedRating
        ? movie.rating >= +this.selectedRating
        : true;
      const matchesYear = this.selectedYear
        ? movie.year === +this.selectedYear
        : true;
      const matchesLanguage = this.selectedLanguage
        ? movie.language === this.selectedLanguage
        : true;

      return (
        matchesQuery &&
        matchesQuality &&
        matchesGenre &&
        matchesRating &&
        matchesYear &&
        matchesLanguage
      );
    });

    if (this.selectedOrderBy) {
      this.filteredMovies.sort((a, b) => {
        if (this.selectedOrderBy === 'year') {
          return b.year - a.year;
        } else if (this.selectedOrderBy === 'rating') {
          return b.rating - a.rating;
        } else if (this.selectedOrderBy === 'oldest') {
          return a.year - b.year; 
        }
        return 0;
      });
    }
  }

  searchMovies(event: Event): void {
    event.preventDefault(); 
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (data) => {
          if (data && data.data && data.data.movies) {
            this.filteredMovies = data.data.movies;
          } else {
            console.error('Unexpected API response format:', data);
            this.filteredMovies = [];
          }
        },
        (error) => {
          console.error('Error fetching movies:', error);
          this.filteredMovies = [];
        }
      );
    }
  }

  setupSearch(): void {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (data) => {
          if (data && data.data && data.data.movies) {
            this.searchResults = data.data.movies;
          } else {
            console.error('Unexpected API response format:', data);
            this.searchResults = [];
          }
        },
        (error) => {
          console.error('Error fetching movies:', error);
          this.searchResults = [];
        }
      );
    } else {
      this.searchResults = [];
    }
  }

  viewMovieDetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }
}
