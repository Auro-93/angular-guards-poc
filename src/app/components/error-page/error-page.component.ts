import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  error: string = "Ooops! The page you're looking for doesn't exist";
  subscription: Subscription | undefined;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

   this.subscription = this.route.params.pipe(map(param =>JSON.parse(param['error']))).subscribe((param) => this.error = param)
  }

  ngOnDestroy(): void {
     this.subscription?.unsubscribe() 
  }

}
