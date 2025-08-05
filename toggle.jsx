import {useState} from "react";

export default function App() {
    const [isOn, setIsOn] = useState(0);
    return(
        <div>
            <button onClick={()=>setIsOn(prev => !prev)}>{isOn ? "On":"Off"} </button>
        </div>
    );
}