import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    function dicriment() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Incremant</button>
            <button onClick={dicriment}>Dincremant</button>
        </div>
    );

};

export default Counter;