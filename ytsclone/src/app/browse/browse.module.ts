// src/app/browse/browse.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';  // Import SharedModule

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component: BrowseComponent}]),
    SharedModule,  // Import SharedModule here
  ]
})
export class BrowseModule { }
