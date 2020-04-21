import { Component, OnInit } from '@angular/core';
import { BookGenreModel } from "../shared/book_genre.model";
@Component({
  selector: 'app-book-genres-list',
  templateUrl: './book-genres-list.component.html',
  styleUrls: ['./book-genres-list.component.css']
})
export class BookGenresListComponent implements OnInit {

  genresArray: BookGenreModel[] = [];
  constructor() { 
    this.genresArray = [
      new BookGenreModel("Adventure", 50),
      new BookGenreModel("Crime", 10),
      new BookGenreModel("Sports", 102),
    ]
  }

  ngOnInit(): void {
  }

}
