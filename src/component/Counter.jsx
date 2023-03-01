import React, { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0);

    let IncremntCnt = (n)=>{
        setCount(count + n)
    }
    let DecremntCnt = (n)=>{
        setCount(count - n)
    }
    let setZero = ()=>{
        setCount(0)
    }
  return (
    <div>
       <button type="button" className='btn btn-primary mx-2' onClick={()=>IncremntCnt(2)}>Increment</button>
       <button type="button" className='btn btn-primary mx-2' onClick={()=>DecremntCnt(2)}>Decrement</button>
       <button type="button" className='btn btn-primary' onClick={setZero}>Set to Zero</button>
       <p>{count}</p>
    </div>
  )
}
