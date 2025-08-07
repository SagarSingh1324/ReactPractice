import {useState, useRef} from "react";

export default function App() {
    
    const inputRef = useRef(null);

    return(
        <div>
            <button onClick={()=>inputRef.current.focus()}>Focus</button>
            <input ref={inputRef}></input>
        </div>
    );
}