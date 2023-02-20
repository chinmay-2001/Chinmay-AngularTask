import { createReducer, on } from "@ngrx/store"
import { increment, decrement, multiply, reset,square } from "../actions/counter.action"
export const initialState = { counter: 0 }

const _counterReducer = createReducer(initialState,
    on(increment, state => {
        return { ...state, counter: state.counter + 1 }
    }),
    on(decrement, state => {
        return { ...state, counter: state.counter - 1 }
    }),
    on(multiply,(state,{multiplyBy})=>{
        return {...state,counter:state.counter*multiplyBy}
    }),
    on(reset,state=>{
        return {...initialState}
    }),
    on(square,state=>{
        return {...initialState,counter:state.counter*state.counter}
    })

)

export function counterReducer(action:any,state:any){
    return _counterReducer(action,state)
}