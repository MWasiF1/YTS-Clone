import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {
  searchQuery: string = ''; // Property to store the search query input by the user

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setupMobileMenuToggle(); // Calls method to set up the mobile menu toggle functionality when component initializes
  }

  setupMobileMenuToggle(): void {
    // Gets references to the mobile menu button and the menu itself
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    // Adds an event listener to the button to toggle the menu visibility on click
    button?.addEventListener('click', () => {
      menu?.classList.toggle('hidden'); // Toggles the 'hidden' class to show or hide the menu
    });
  }

  searchMovies(): void {
    // Checks if the search query is not just whitespace
    if (this.searchQuery.trim()) {
      // Navigates to the search page with the query as a query parameter
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}
