import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add-book-form', component: AddBookFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
