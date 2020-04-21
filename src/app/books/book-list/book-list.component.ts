import { Component, OnInit } from '@angular/core';
import { BookModel } from "../books.model";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // create books array of BooksModel to display in page
  bookArr: BookModel[] = [];
  constructor() { 
    // instantatiate it in constructor
    this.bookArr = [
      new BookModel("Harry Potter", 'J K Rowling', 3300, 
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
      new BookModel("Harry Potter", 'J K Rowling', 3300, 
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    ]
  }

  ngOnInit(): void {
  }

}
