import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { increment,decrement,multiply,reset,square } from '../Store/actions/counter.action';
import * as fromRoot from '../Store/selectors/counter.selector'
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    // count$:Observable<number>;
    count$:Observable<[]>;
    constructor(private store:Store<fromRoot.Appstate>){
        this.count$=this.store.pipe(select(fromRoot.selectFeaturecount))
        console.log(this.count$)
    }
    increment(){
      this.store.dispatch(increment()); 
    }
    decrement(){
      this.store.dispatch(decrement())
    }
    reset(){
      this.store.dispatch(reset())
    }
    multiplyByTwo(){
      this.store.dispatch(multiply({multiplyBy:2}))
    }
    multiplyByThree(){
      this.store.dispatch(multiply({multiplyBy:3}))
    }
    square(){
      this.store.dispatch(square())
    }
}

