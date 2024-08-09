import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourKMoviesComponent } from './four-k-movies.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FourKMoviesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FourKMoviesComponent
  ]
})
export class FourKMoviesModule { }
