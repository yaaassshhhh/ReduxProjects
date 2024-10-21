import { useSelector , useDispatch } from "react-redux";
import {increment ,  decrement} from '../redux/features/counter/counterSlice'

import React from 'react'

function Counter() {
 const count = useSelector((state) => state.counter.value)

 const dispatch = useDispatch()
;
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter