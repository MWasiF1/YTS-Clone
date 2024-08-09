import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card', 
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'] 
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any; // Input property to receive movie data from parent component

  ngOnInit() {
    // Log movie data to console to verify it is being received
    console.log('Movie Data:', this.movie);
  }
}
