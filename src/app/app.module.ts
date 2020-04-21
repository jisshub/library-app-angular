import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookGenresListComponent } from './book-genres-list/book-genres-list.component';
import { BookGenresListEditComponent } from './book-genres-list/book-genres-list-edit/book-genres-list-edit.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookGenresListComponent,
    BookGenresListEditComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
