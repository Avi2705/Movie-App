import React, { useReducer } from 'react'
const initialState = {count : 0}
const reducer = (state, action) =>{
switch(action.type){
  case "Increment":
    return {count : state.count +1}
  case "Decrement":
    return {count : state.count -1}
  case "reset":
    return {count: 0} 
  default:
    throw new Error(`unhandled action type: ${action.type}`)
}
}
const Reducder = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='flex gap-2'>
      <div>count :{state.count}</div>
      <button  onClick={()=>dispatch({type: "Increment"})} >+</button>
      <button   onClick={()=>dispatch({type: "Decrement"})} >-</button>
      <button  onClick={()=>dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default Reducder