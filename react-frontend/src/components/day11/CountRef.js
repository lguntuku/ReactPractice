import React, { useRef, useState } from 'react'

export default function CountRef() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef('');

    console.log("component rendered");
    const handleCount = () => {
        setCount(count + 1)
    }

    const handleRefCount = () => {
        countRef.current += 1
        console.log(countRef.current);
    }

   const handleInputUsingRef = () => {
    console.log(inputRef.current.value);
   }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h4>{count} &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;{countRef.current}</h4>
                <button onClick={handleCount}>Using State</button> &nbsp; &nbsp;
                <button onClick={handleRefCount} >UsingRef</button>
                <p> {inputRef.current.value} </p>   {/* this input value will be displayed when state value is updated */}
                <input ref={inputRef} onChange={handleInputUsingRef}></input>
            </div>
            <h3>Advantages of using UseRef:</h3>
            <p>When we want to get the updated DOM elements or mutable values without re-rendering the UI then it is useful.
                For example, In google analytics it is helful to get how many button clicks are happened &
                also the UI will not be rerendered or updated until the state has been changed.
                In simple words, WHen value change the page will not re renders.
            </p>
            <h4>Use State:</h4><p>
                Controlled Components:
                With useState, you can manage and update the state of controlled components
                (e.g., form inputs) and ensure that the UI reflects the latest state.
                When we want to update both UI & its value then we use useState();
                It will rerender the UI to update the state value.</p>
            <h4>Component Mount vs re render is:</h4>
            <p> Whatever logic or statements we write in component mount it will render only first time
                where as re-render means for every state or prop change the complete component will be rendered from starting
            </p>
            <h4>Uncontrolled Components vs. Controlled Components</h4>
            <h4>Controlled Components:</h4>
            <p> Form data is managed by the state of the React component.
                Input values are updated through state changes and event handlers.</p>
            <h4>Uncontrolled Components:</h4>
            <p>Form data is managed by the DOM.
                Input values are accessed using refs and are not directly tied to React state.
            </p>
        </div>
    )
}
