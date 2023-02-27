import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/productStore";
import { getProducts } from "../action/actions";
import { prod } from "../../product-list/prod";

export const proList = createReducer(initialState,
    on(getProducts, (state:prod) => {return state}
    )
    )