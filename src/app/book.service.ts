import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getAllBook(): any {
    return [{
      id: 1, "name": "HTML 5"
    },
    {
      id: 2, "name": "CSS 3"
    },
    {
      id: 3, "name": "JavaScript"
    },
    {
      id: 4, "name": "Angular"
    }]
  }
}
