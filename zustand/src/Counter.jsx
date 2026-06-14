import React from 'react'
import useCountStore from './store/counterStore'
export default function Counter() {
const count = useCountStore((state)=>state.count)
const increment = useCountStore((state)=>state.increment)
const decrement = useCountStore((state)=>state.decrement)
const log = useCountStore(
    (state)=>state.logCount
)
  return (
    <>
    <div>{count}</div>
    <button onClick={log} >Current Count</button>
    <button onClick={increment} >increment Count</button>
    <button onClick={decrement} >increment Count</button>
    </>
  )
}
