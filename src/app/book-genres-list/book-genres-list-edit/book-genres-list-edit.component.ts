import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-book-genres-list-edit',
  templateUrl: './book-genres-list-edit.component.html',
  styleUrls: ['./book-genres-list-edit.component.css']
})
export class BookGenresListEditComponent implements OnInit {

  // emit the event to parent component
  @Output() emitInfo = new EventEmitter<{genre: string, total: string}>()
  // get the element ref using viewChild
  @ViewChild('book_genre', {static: true}) getBookGenre: ElementRef;
  @ViewChild('total_books', {static: true}) getBookTotal: ElementRef;
  constructor() { 
  }

  ngOnInit(): void {
  }

  onAddGenre(){
    this.emitInfo.emit({
        genre: this.getBookGenre.nativeElement.value,
        total: this.getBookTotal.nativeElement.value
        })
  }

}
