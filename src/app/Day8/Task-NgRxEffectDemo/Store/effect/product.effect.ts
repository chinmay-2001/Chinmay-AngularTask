import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ProductServiceService } from '../../product-service.service'
import { map, mergeMap, catchError } from 'rxjs/operators'
@Injectable()
export class ProductEffect {
    constructor(private action$: Actions, private productserviceservice: ProductServiceService) { }

    loadProduct$ = createEffect(() => this.action$.pipe(ofType('GET_ALL_PRODUCTS'), mergeMap(() => this.productserviceservice.getAllProducts().pipe(map(products => ({ type: 'GET_ALL_PRODUCT_SUCCESS', allproducts: products })),
    // catchError(()=>of({type:'GET_ALL_PRODUCTS_ERROR',erromessage:'No Products found'}))
    )

    )))
}

// loadProducts$ = createEffect(() => this.actions$.pipe(
//     	        ofType('[ProductList Component] GET_ALL_PRODUCTS'),
//     	        mergeMap(() => this.productService.getAllProducts()
//     	            .pipe(
//     	                map(products => ({ type: '[ProductList Component] GET_ALL_PRODUCTS SUCCESS', allProducts: products })),
//                     catchError(() => of({ type: '[ProductList Component] GET_ALL_PRODUCTS ERROR', errorMessage: 'No Products Found' }))
//     ))));
    