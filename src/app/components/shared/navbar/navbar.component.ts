import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { delay, map, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  isLoggedIn$: Observable<boolean> | undefined;
  authStream$ : Observable<boolean> = new Observable();
  loading: boolean = false;
  showMenu$: Observable<Boolean> | undefined;

  constructor(private authService: AuthService, private bpObserver : BreakpointObserver) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: './assets/images/menu-home.png', routerLink: ['/home'] },
      { label: 'Books', icon: './assets/images/menu-book.png', routerLink: ['/books'] },
      {
        label: 'Favourites',
        icon: './assets/images/menu-favourites.png',
        routerLink: ['/favourites'],
      },
      { label: 'Order', icon: './assets/images/menu-order.png', routerLink: ['/order'] },
    ];
    this.activeItem = this.items[0];

    this.isLoggedIn$ = this.authService.loggedIn$;

    this.showMenu$ = this.bpObserver.observe(['(max-width: 800px)']).pipe(
      map((result: BreakpointState) => result.matches)
    )


  }

  onAuth(e: any){
    if(e.target.innerText === 'Login'){
     this.authService.loggedIn$.next(true)
      
    }else{
      this.authService.loggedIn$.next(false)
    }
  }
}
