import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddBookFormComponent } from './components/admin-center/add-book-form/add-book-form.component';
import { MainComponent } from './components/main/main.component';
import { BookCardComponent } from './components/main/book-card/book-card.component';
import { BookDetailsComponent } from './components/main/book-details/book-details.component';
import { SearchResultsComponent } from './components/main/search-results/search-results.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/main/user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { firebase, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AdminCenterComponent } from './components/admin-center/admin-center.component';
import { ItemsComponent } from './components/admin-center/items/items.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
};

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
    LoginComponent,
    UserDashboardComponent,
    AdminCenterComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
