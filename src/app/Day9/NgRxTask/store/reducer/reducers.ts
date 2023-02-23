import { createReducer,on } from "@ngrx/store";
import { initialState } from "../state/productStore";
import { getProduct } from "../action/actions";


const proList=createReducer(initialState,
    on(getProduct, (state) =>state
    ))