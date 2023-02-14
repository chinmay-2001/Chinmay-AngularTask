import { Component,Input } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { book } from './book';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent  implements OnInit{
  bookListFromService:book[] = [];
  constructor(private bookService: BookService){
    this.bookListFromService = this.bookService.getAllBook();
  }
  ngOnInit(): void {
  }
 
  //Passing of variables from parent to child components
  @Input() myInputMeassage:string="";
}
