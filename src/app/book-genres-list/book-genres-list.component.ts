import { Component, OnInit } from '@angular/core';
import { BookListComponent } from "../books/book-list/book-list.component";
@Component({
  selector: 'app-book-genres-list',
  templateUrl: './book-genres-list.component.html',
  styleUrls: ['./book-genres-list.component.css']
})
export class BookGenresListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
