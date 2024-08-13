import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];
  showDropdown = false;
  openMenu = false;
  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.setupMobileMenuToggle();
  }

  setupMobileMenuToggle(): void {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    button?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  }

  setupSearch(): void {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(data => {
        if (data && data.data && data.data.movies) {
          this.searchResults = data.data.movies;
          this.showDropdown = true;
        } else {
          console.error('Unexpected API response format:', data);
        }
      }, error => {
        console.error('Error fetching movies:', error);
      });
    } else {
      this.searchResults = [];
      this.showDropdown = false;
    }
  }

  searchMovies(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }

  onResultClick(movie: any): void {
    this.searchQuery = movie.title;
    this.showDropdown = false;
    this.router.navigate(['/movie', movie.id]);  // Navigate to the movie detail page
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  hideDropdown() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 100); // Delay to allow click events inside dropdown
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.relative') === null) {
      this.showDropdown = false;
    }
  }
}
