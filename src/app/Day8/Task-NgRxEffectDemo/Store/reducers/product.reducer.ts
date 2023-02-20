import { createReducer, on } from '@ngrx/store'
import { getAllproducts, getAllProductsAPISuccess, getAllProductsAPIError } from '../actions/product.actions'
import { intialProductState } from '../states/products.store'

const _productReducer = createReducer(intialProductState,
    on(getAllproducts, (state) => state),
    on(getAllProductsAPISuccess, (state: any, { allProducts }) => { return { ...state, allProducts: allProducts, errorMessage: "" } }),
    on(getAllProductsAPIError, (state: any, { errorMessage }) => {
        return { ...state, errorMessage: errorMessage, allProducts: [] }
    })
)