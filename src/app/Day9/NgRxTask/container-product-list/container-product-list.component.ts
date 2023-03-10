import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectFeaturePoduct } from 'src/app/Day9/NgRxTask/store/selector/selectors';

@Component({
  selector: 'app-container-product-list',
  templateUrl: './container-product-list.component.html',
  styleUrls: ['./container-product-list.component.css']
})
export class ContainerProductListComponent {

  constructor(private store: Store<AppState>) {

  }
  pro = this.store.select(selectFeaturePoduct)

}
