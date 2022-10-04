import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  error$: Observable<string> | undefined;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.error$ = this.route.params
      .pipe(
        map(param => {
          return param['error'] ? JSON.parse(param['error']) : "Ooops! The page you're looking for doesn't exist"
        })
      )
  }

}
