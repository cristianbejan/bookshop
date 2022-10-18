import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  userData: User | null = null;
  subscriptions: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authService.currentUser.subscribe((user: User) => {
        this.userData = user;
      })
    );
  }

  onLogout() {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
