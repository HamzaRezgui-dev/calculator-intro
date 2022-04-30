import React from 'react'
import { ACTIONS } from './App'
export default function DigitButton({dispatch, digit}) {
  return (
      //on click that has the add digit function and its passing
      //along the digit we want to add
    <button 
    onClick={()=> 
    dispatch({ 
    type:ACTIONS.ADD_DIGIT, 
    payload: { digit } 
    })}>
    {digit}
    </button>
  )
}
