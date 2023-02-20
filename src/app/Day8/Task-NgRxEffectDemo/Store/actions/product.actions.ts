import { createAction,props } from '@ngrx/store' 
import { Product } from '../../product-list/product'

export const getAllproducts=createAction('GET_ALL_PRODUCTS')

export const getAllProductsAPISuccess= createAction('GET_ALL_PRODUCTS_SUCCESS',props<{allProducts:Product[]}>())
export const getAllProductsAPIError=createAction('GET_ALL_PRODUCTS_ERROR',props<{errorMessage:string}>())