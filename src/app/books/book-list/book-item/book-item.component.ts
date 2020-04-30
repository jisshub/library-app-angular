import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BookModel} from "../../books.model"

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  // just emit an event to inform parent an event happens, no data to be passed
  @Output() bookOut = new EventEmitter<void>()
  @Input() book: BookModel;


  constructor() { }

  ngOnInit(): void {
  }
  onBookSelected(){
    // emit here
    this.bookOut.emit();
  }
}
