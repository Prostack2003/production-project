import React from 'react';
import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>I am Counter!</button>
            <h2>It's time to Dev!</h2>
        </div>
    );
};
