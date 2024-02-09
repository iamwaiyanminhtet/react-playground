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
    return (
        <div>
            <button onClick={() => dispatch({type : "increment"})}>Increment</button>
            <p>UseReducer count  {state.count}</p>
            <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
        </div>
    )
}

export default UseReducer