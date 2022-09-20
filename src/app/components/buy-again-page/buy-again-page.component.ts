import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-buy-again-page',
  templateUrl: './buy-again-page.component.html',
  styleUrls: ['./buy-again-page.component.scss'],
})
export class BuyAgainPageComponent implements OnInit, OnDestroy{
  orders: Order[] = [
    {
      title: 'Order 1',
      description: `
    Book 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      price: 14.5,
    },
    {
      title: 'Order 2',
      description: `
    Book 21. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      price: 9.9,
    },
    {
      title: 'Order 3',
      description: `
    Book 13. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      price: 10.45,
    },
    {
      title: 'Order 4',
      description: `
    Book 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      price: 12.2,
    },
  ];

  subscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.authService.loggedIn$
      .pipe(filter((auth) => !auth))
      .subscribe(() => this.router.navigate(['/books']));
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }
}
