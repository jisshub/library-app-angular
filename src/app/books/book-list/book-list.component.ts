import { Component, OnInit , Output} from '@angular/core';
import { BookModel } from "../books.model";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // emit an event to parent component:
  @Output() emitToBooks = new EventEmitter<BookModel>()
  // create books array of BooksModel to display in page
  bookArr: BookModel[] = [
    new BookModel("Harry Potter", 'J K Rowling', 3300, 
    "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    new BookModel("Harry Potter", 'J K Rowling', 3300, 
    "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
  ];

  constructor() {}

  ngOnInit(): void {}

  // get book of BookModel type
  OnBookIsSelected(getEachBook: BookModel){
    // here emit the BookModel type data
      this.emitToBooks.emit(getEachBook);
  }
}


