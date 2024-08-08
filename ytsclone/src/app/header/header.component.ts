import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';

  constructor(private router: Router) { }

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

  searchMovies(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}
