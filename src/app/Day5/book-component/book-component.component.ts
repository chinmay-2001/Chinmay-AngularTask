import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent {
  
  constructor(private bookService: BookService){

  }
  bookListFromService = this.bookService.getAllBook();
}
