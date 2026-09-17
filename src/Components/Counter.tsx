import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount (count + 1)
    };

    const decrementar = () => {
        if(count > 0){
            setCount (count - 1)
        }
    };
        return(
        <div>
            <p>Este es un contador, esta en: {count}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Counter;