import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; import { concat } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-observable-service-task',
  templateUrl: './observable-service-task.component.html',
  styleUrls: ['./observable-service-task.component.css']
})


export class ObservableServiceTaskComponent implements OnInit {
  ngOnInit(): void {
    let observable = of(["hello", "world"], ["Namaste", "india"]);
    observable.subscribe(
      data => console.log(data),
      error => console.log(error),
    )

    let observable1 = new Observable(observer => { 
      setTimeout(() => observer.next(10), 1000); 
      setTimeout(() => observer.next(20), 1500); 
      setTimeout(() => observer.complete(), 1500); 
    });
    let observable2 = new Observable(observer => {
      setTimeout(() => observer.next(true), 1000);
      setTimeout(() => observer.next(false), 1500);
      setTimeout(() => observer.complete(), 1500);
    });

    let observable3 = new Observable(observer => {
      setTimeout(() => {
        observer.next("hello");
        observer.complete();
      }, 1500);
    });

    let observable4 = observable1.pipe(concat(observable2, observable3));

    observable4.subscribe(
      data => console.log("Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

  }


}
