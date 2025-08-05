import {useState} from "react";

export default function App() {
    const [counter, setCounter] = useState(0);
    return(
        <div>
            Current count is: {counter}
            <button onClick={()=>setCounter(prev => prev+1)}>increment</button>
            <button onClick={()=>setCounter(prev => prev-1)}>decrement</button>
        </div>
    );
}