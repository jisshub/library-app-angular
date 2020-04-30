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
    new BookModel("The Monk Who Sold his ferrari", 'Robin Sharma', 3300, 
    "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    new BookModel("Harry Potter", 'J K Rowling', 3300, 
    "https://images.squarespace-cdn.com/content/59aa7d07d2b857b875602871/1505471324923-B5E0YBK5CCWKGMAW0ZYI/Themonk+who+sold+ferrari.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    new BookModel("The Great Gatsby","Scott Fitzgerald", 4500, "https://kbimages1-a.akamaihd.net/cb34b7ac-2d03-481f-b361-6e92113234c8/1200/1200/False/the-great-gatsby-13.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." )
  ];

  constructor() {}

  ngOnInit(): void {}

  // get book of BookModel type
  OnBookIsSelected(getEachBook: BookModel){
    // here emit the BookModel type data
      this.emitToBooks.emit(getEachBook);
  }
}


