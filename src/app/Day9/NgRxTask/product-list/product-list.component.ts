import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/selector/selectors'
import { prod } from './prod';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pro!:Observable<prod[]> 
  constructor(private store:Store<fromRoot.AppState>){
  }

  ngOnInit(): void {     
    this.pro=this.store.select(fromRoot.selectFeaturePoduct)
    console.log(this.pro)
  }
}
