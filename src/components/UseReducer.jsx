import { useEffect } from "react";
import { useRef } from "react";
import { useReducer } from "react"

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {...state, count : state.count + 1};
        case "decrement":
            return {...state, count : state.count - 1};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});
    const prevNum = useRef();
    const renderTime = useRef(0); 
    const buttonRef = useRef();
    useEffect(() => {
        prevNum.current = state.count
    }, [state.count]);

    useEffect(() => {
        renderTime.current++;
    })
    console.log(buttonRef.current)
    return (
        <div>
            <button ref={buttonRef} onClick={() => dispatch({type : "increment"})}>Increment</button>
            <p>UseReducer count  {state.count}</p>
            <p>Prev count  {prevNum.current}</p>
            <p>Render count  {renderTime.current}</p>
            <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
        </div>
    )
}

export default UseReducer