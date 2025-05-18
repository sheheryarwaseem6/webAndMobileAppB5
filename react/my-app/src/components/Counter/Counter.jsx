import { useState } from "react";

function Counter(){
    const [count , setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
    function handleReset(){
        setCount(0)
    }
    function handleDecrement(){
        setCount(count-1)
    }

    return (
        <>
        <h1>counter is {count}</h1>
        <button onClick={handleClick}>Click to Increase</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>decrement</button>
        </>
    )
}

export default Counter;