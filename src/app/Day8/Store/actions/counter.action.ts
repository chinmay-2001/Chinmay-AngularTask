import { createAction,props } from "@ngrx/store";


export const getpro=createAction('getpro')
export const increment=createAction('increment')
export const decrement=createAction('decrement')
export const multiply=createAction('mutiply',props<{multiplyBy:number}>())
export const square=createAction('square')
export const reset=createAction('reset')


