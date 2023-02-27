import { createReducer, on } from "@ngrx/store"
import { increment, decrement, multiply, reset,square,getpro } from "../actions/counter.action"
// export const initialState = { counter: 0 }
export const initialState={"allprod":{id:1,
                            name:"chinmay",
                            price:"realme"}}

const _counterReducer = createReducer(initialState,
    on(getpro,state=>state),
    on(increment, state => {
        // return { ...state, counter: state.counter + 1 }
        return state
    }),
    on(decrement, state => {
        // return { ...state, counter: state.counter - 1 }
        return state
    }),
    on(multiply,(state,{multiplyBy})=>{
        // return {...state,counter:state.counter*multiplyBy}
        return state
    }),
    on(reset,state=>{
        return {...initialState}
    }),
    on(square,state=>{
        // return {...initialState,counter:state.counter*state.counter}
        return state
    })

)

export function counterReducer(action:any,state:any){
    return _counterReducer(action,state)
}