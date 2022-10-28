import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './components/admin-center/add-book-form/add-book-form.component';
import { AdminCenterComponent } from './components/admin-center/admin-center.component';
import { ItemsComponent } from './components/admin-center/items/items.component';
import { LoginComponent } from './components/login/login.component';
import { BookDetailsComponent } from './components/main/book-details/book-details.component';
import { CartComponent } from './components/main/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { SearchResultsComponent } from './components/main/search-results/search-results.component';
import { UserDashboardComponent } from './components/main/user-dashboard/user-dashboard.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'book/:id/:title', component: BookDetailsComponent },
  { path: 'add-book-form', component: AddBookFormComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'user-profile', component: UserDashboardComponent },
  { path: 'admin', component: AdminCenterComponent },
  { path: 'admin/items', component: ItemsComponent },
  { path: 'admin/items/add-book', component: AddBookFormComponent },
  { path: 'admin/items/edit-book/:id', component: AddBookFormComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
