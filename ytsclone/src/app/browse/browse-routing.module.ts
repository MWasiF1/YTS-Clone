import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';


const routes: Routes = [
  { path: '', component: BrowseComponent }, // Default route that loads the BrowseComponent
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Import RouterModule with the defined routes
  exports: [RouterModule] // Export RouterModule so it can be used in other modules
})
export class BrowseRoutingModule { }
