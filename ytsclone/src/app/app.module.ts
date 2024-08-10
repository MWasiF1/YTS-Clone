
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { BrowseModule } from './browse/browse.module';
import { SharedModule } from './shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MovieDetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    HomeModule,
    BrowseModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
