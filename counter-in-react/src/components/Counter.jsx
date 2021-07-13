import React, {useState} from 'react'

const Counter = () =>{
    const [number, setNumber] = useState(5)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(0)
    }


    return(
        <>
        <h1>Number:{number}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter
