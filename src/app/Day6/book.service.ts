import { Injectable } from '@angular/core';
import { Book } from './observable-task/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = './assets/books.json';
  constructor(private http: HttpClient) {
  }
  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl)
  }

}
