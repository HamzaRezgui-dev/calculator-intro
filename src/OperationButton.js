import React from 'react'
import { ACTIONS } from './App'
export default function OperationButton({dispatch, operation}) {
  return (
      //on click that has the add digit function and its passing
      //along the digit we want to add
    <button 
    onClick={()=> 
    dispatch({ 
    type:ACTIONS.CHOOSE_OPERATION, 
    payload: { operation } 
    })}>
    {operation}
    </button>
  )
}
