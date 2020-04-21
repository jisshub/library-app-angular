// create a model for books
export class BookModel {
    constructor(public bookName: string, public bookAuthor: string, public bookPages: number, public bookImage: string) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPages = bookPages;
        this.bookImage = bookImage;
    }
}
