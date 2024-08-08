import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './search/search.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { FourKMoviesComponent } from './four-k-movies/four-k-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'browse', loadChildren: () => import('./browse/browse.module').then(m => m.BrowseModule) },
  { path: 'trending', loadChildren: () => import('./trending-movies/trending-movies.module').then(m => m.TrendingModule) },
  { path: 'four-k-movies', loadChildren: () => import('./trending-movies/trending-movies.module').then(m => m.TrendingModule) },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
