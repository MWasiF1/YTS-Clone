import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { RouterModule } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';  
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BrowseComponent 
  ],
  imports: [
    CommonModule, // Import to use common Angular directives and pipes
    RouterModule.forChild([{path:'',component: BrowseComponent}]), // Set up routing for this module
    SharedModule,  
    FormsModule
  ],
  exports: [BrowseComponent]
})
export class BrowseModule { }
