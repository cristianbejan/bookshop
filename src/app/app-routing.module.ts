import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { BookDetailsComponent } from './components/main/book-details/book-details.component';
import { MainComponent } from './components/main/main.component';
import { SearchResultsComponent } from './components/main/search-results/search-results.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'book/:id/:title', component: BookDetailsComponent },
  { path: 'add-book-form', component: AddBookFormComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
