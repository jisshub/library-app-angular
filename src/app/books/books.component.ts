import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // intialize a property to store the selected book oof type BookModel 
  selectedBook: BookModel;
  constructor() { }

  ngOnInit(): void {
  }


}
