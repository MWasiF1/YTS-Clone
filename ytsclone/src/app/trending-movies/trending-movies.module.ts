import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingRoutingModule } from './trending-movies-routing.module';
import { TrendingMoviesComponent } from './trending-movies.component'; 

@NgModule({
  declarations: [
    TrendingMoviesComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule
  ],
  exports: [TrendingMoviesComponent]
})
export class TrendingModule { }
