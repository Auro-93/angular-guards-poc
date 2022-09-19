import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.scss']
})
export class RecommendedBooksComponent implements OnInit {

  @Input() book!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
