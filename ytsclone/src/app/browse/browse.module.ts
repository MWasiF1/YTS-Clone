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
    CommonModule, 
    RouterModule.forChild([{path:'',component: BrowseComponent}]), 
    SharedModule,  
    FormsModule
  ],
  exports: [BrowseComponent]
})
export class BrowseModule { }
