import { createSelector } from '@ngrx/store'
import { Product } from '../../product-list/product'

export interface FeatureState{
    allProducts:Product[]
    errorMessage:string;
}

export interface AppState{
    products:FeatureState;
}

export const selectFeature =(state:AppState)=>{
    return state.products
}

export const selectError=(state:AppState)=>{
    return state.products
}

export const selectFeaturePoduct=createSelector(
    selectFeature,
    (state:FeatureState)=>state.allProducts
)

export const selectFeatureError=createSelector(selectError,
    (state:FeatureState)=>state.errorMessage)