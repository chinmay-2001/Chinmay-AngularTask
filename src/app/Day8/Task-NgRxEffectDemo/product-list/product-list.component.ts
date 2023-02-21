import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from "../Store/selector/product.selector"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch({ type: 'GET_ALL_PRODUCTS' });
  }
  constructor(private store: Store<fromRoot.AppState>) {
  }
  products$: Observable<Product[]> = this.store.pipe(select(fromRoot.selectFeaturePoduct))

  message$: Observable<string> = this.store.pipe(select(fromRoot.selectFeatureError))

}
