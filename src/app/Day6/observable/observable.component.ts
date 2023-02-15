import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
    obs():Observable<product[]>{
      // console.log("observer started",observer)
      // observer.next("1")
      // observer.next("2")
      // observer.next("3")
      // observer.next("4")
      // observer.next("5")
      return this.http.get<product[]>(`https://fakestoreapi.com/products`)
    }

    products:product[]=[]
    constructor(private http:HttpClient){
      this.obs().subscribe({
        next: data=>{
          this.products = data
          console.log(data)
        }
      })
    }
}
