import { createSelector } from '@ngrx/store'
export interface featureState{
    // counter:number;
    counter:[]
}
export interface Appstate{
    count:featureState;
}
export const selectFeature=(state:Appstate)=>{
    return state.count;
}

export const selectFeaturecount=createSelector(
    selectFeature,
    (state:featureState)=>state.counter
)