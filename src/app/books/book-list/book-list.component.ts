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
      new BookModel("dasda", 'asdad', 33, 
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nisi? Quo voluptate omnis id qui cum quasi at eum maiores.")
    ]
  }

  ngOnInit(): void {
  }

}
