import {useState, useEffect} from 'react';

export function App() {
  
  const [expand, setExpand] = useState(0);
  const items = ["apple", "mango", "pineapple", "grapes" ];

  return (
    <div>
        <button onClick={()=>setExpand(prev => !prev)}>click to toggle expand:</button>
        {expand && (
        <ul>
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        )}
    </div>
  );   
}