import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../core/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

const ADMIN_UID = '6Tq0c6gppMOnFWUC7uPmhWWmWEH3';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>(null);
  currentUser = this.user$.asObservable();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe((user: User) => {
      this.onUserSignin(user);
    });
  }

  // pas to user$ the signed in user details
  onUserSignin(user: User) {
    this.user$.next({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isAdmin: user.uid === ADMIN_UID,
    });
    this.router.navigate(['user-profile']);
  }

  // // Sign out,clear user$ details, and redirect to main page
  signOut(): void {
    this.angularFireAuth.signOut();
    this.user$.next(null);
    this.router.navigate(['log-in']);
  }
}
