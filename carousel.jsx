import React, {useState} from "react";

function Carousel({data}){
    const sz = data.length;
    const [idx, setIdx] = useState(0);

    const increment = () => {
        if(idx+1 === sz){
            setIdx(0);
        }
        else
        {
            setIdx(prev => prev+1);
        }
    }
    const decrement = () => {
        if(idx===0){
            setIdx(sz-1);
        }
        else
        {
            setIdx(prev => prev-1);
        }
    }

    return(
        <div>
            <button onClick={decrement}>
                previous
            </button>

            {data[idx]}
            
            <button onClick={increment}>
                next
            </button>
        </div>
    )
}

export default function App(){
    const list = ["apple", "mango", "guvava"];
    return(
        <Carousel data={list}/>
    )
}