import { Component, OnInit } from '@angular/core';
import { BookModel } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // define event method here:
  onBookWasSelected(getData: BookModel){

  }

}
