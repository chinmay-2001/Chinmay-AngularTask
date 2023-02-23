import { createSelector } from "@ngrx/store";
import {prod} from '../../product-list/prod'

export interface featureState{
    getAllProduct:prod[]
}

export interface AppState{
    product:featureState
}
export const selectFeature=(state:AppState)=>{
    return state.product;
}