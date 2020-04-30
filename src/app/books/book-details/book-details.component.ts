import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  // get the property here from books compoenent.
  @Input() bookProperty: BookModel;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
