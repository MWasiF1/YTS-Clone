// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent  // Export MovieCardComponent
  ]
})
export class SharedModule { }
