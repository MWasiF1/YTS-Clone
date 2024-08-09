import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { RouterModule } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';  

@NgModule({
  declarations: [
    BrowseComponent 
  ],
  imports: [
    CommonModule, // Import to use common Angular directives and pipes
    RouterModule.forChild([{path:'',component: BrowseComponent}]), // Set up routing for this module
    SharedModule,  
  ],
  exports: [BrowseComponent]
})
export class BrowseModule { }
