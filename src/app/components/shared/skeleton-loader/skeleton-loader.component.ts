import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input()
  loadingPlaceholderNum!: number;

  cards:number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cards = [...Array(this.loadingPlaceholderNum).keys()];
  }

}
