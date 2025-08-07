import {useState, useEffect} from "react";

export default function useLocalStorage(key, value){

    const [val, setVal] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : initialValue;
    });

    useEffect( () => {
            localStorage.setItem(key, JSON.stringify(val));
        },
    [key, value])

    return [val, setVal];
}