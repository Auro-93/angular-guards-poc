import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/Book';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss'],
})
export class GenreCardComponent implements OnInit {
  @Input()
  genre!: Genre;

  constructor() {}

  ngOnInit(): void {}
}
