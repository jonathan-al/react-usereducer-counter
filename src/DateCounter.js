import React, { useReducer } from "react"

// Define the initial state
const initialState = {
  count: 0,
}

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    case "reset":
      return { ...state, count: 0 }
    default:
      throw new Error("Unknown action type")
  }
}

// Component using useReducer
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count } = state

  const increment = () => {
    dispatch({ type: "increment" })
  }

  const decrement = () => {
    dispatch({ type: "decrement" })
  }

  const reset = () => {
    dispatch({ type: "reset" })
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
