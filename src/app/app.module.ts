import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { MainComponent } from './components/main/main.component';
import { BookCardComponent } from './components/main/book-card/book-card.component';
import { BookDetailsComponent } from './components/main/book-details/book-details.component';
import { SearchResultsComponent } from './components/main/search-results/search-results.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBookFormComponent,
    MainComponent,
    BookCardComponent,
    BookDetailsComponent,
    SearchResultsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
