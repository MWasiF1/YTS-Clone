import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingRoutingModule } from './trending-movies-routing.module';
import { TrendingMoviesComponent } from './trending-movies.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    TrendingMoviesComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule
  ]
})
export class TrendingModule { }
