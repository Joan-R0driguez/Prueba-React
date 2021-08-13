import { useState } from "react";

export const Counter = ({value}) => {

    const [count, setCount] = useState(value)

    function Decrease() {
        setCount(count - 1)
    }

    function Reset() {
        setCount(value)
    }

    function Increase() {
        setCount(count + 1)
    }


    return(
        <>

        <h1>Countador: {count}</h1>

        <button onClick={Decrease} >-1</button>
        <button onClick={Reset} >Reset</button>
        <button onClick={Increase} >+1</button>
        </>
    );
}