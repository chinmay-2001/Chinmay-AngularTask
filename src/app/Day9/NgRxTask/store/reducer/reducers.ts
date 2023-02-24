import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/productStore";
import { getProducts } from "../action/actions";


export const proList = createReducer(initialState,
    on(getProducts, (state) => {return state}
    )
    )