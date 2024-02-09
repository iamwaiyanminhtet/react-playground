import { useMemo, useState } from "react";

const UseMemo = () => {

    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    
    function doubleNum(num) {
        let i = 0;
        while(i < 1000000000) {
            i++;
        }
        return num * 2
    }

    const doubleNumber = useMemo(() => {
        return doubleNum(number)
    }, [number]);
    return (
       <>
        <p>Double Numer {doubleNumber}</p>
        <input type="number" onChange={(e) => setNumber(Number(e.target.value))}  />
        <p>{count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
       </>
    )
}

export default UseMemo