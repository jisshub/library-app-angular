import { Component, OnInit } from '@angular/core';
import { BookGenreModel } from "../shared/book_genre.model";
@Component({
  selector: 'app-book-genres-list',
  templateUrl: './book-genres-list.component.html',
  styleUrls: ['./book-genres-list.component.css']
})
export class BookGenresListComponent implements OnInit {

  genresArray: BookGenreModel[] = [];
  constructor() {}

  ngOnInit(): void {
  }

  // definr emethod ijniked in th book0egrne-list view
  onEmitEvent(getEventData: {genre: string, total: string}){
    this.genresArray.push(
      new BookGenreModel(getEventData.genre, getEventData.total)
    )
  }

}
