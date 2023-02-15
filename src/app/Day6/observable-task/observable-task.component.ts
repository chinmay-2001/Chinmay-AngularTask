import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';
@Component({
  selector: 'app-observable-task',
  templateUrl: './observable-task.component.html',
  styleUrls: ['./observable-task.component.css']
})
export class ObservableTaskComponent implements OnInit{
    newBooks:Book[] = [];

    constructor(private bookService: BookService){
    }
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    this.bookService.getBook().subscribe(books => {
      this.newBooks = books;
      console.log(this.newBooks);
    })
  }
}
