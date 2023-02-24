import { createSelector } from "@ngrx/store";
import {prod} from '../../product-list/prod'

export interface AppState{
    getAllProduct:Array<prod>
}

export const selectFeature=(state:AppState)=>state.getAllProduct;

export const selectFeaturePoduct=createSelector(
    selectFeature,
    (state:Array<prod>)=>state
)
