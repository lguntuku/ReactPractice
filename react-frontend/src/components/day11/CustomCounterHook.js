import React from 'react'
import useCounter from './useCounter'
import useKey from './useKey';

export default function CustomCounterHook() {
  const [count,inc, dec, res] = useCounter();
  const [keyPressed] = useKey();
  return (
    <div>
        <p>{count}</p>
        <button onClick={inc} >Increment Count</button> &nbsp;
        <button onClick={dec} >Decrement Count</button> &nbsp;
        <button onClick={res} >Reset Count</button>


        <h3>Key Pressed: {keyPressed}</h3>
    </div>
  )
}
