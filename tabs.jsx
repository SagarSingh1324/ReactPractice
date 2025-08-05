import React, {useState, useEffect} from 'react';

export function App() {
  
  const [tab, setTab] = useState("fruits");
  const items = [
    {name:"fruits", items:["fr1", "fr2","fr3"]},
    {name:"vegetables", items:["veg1", "veg2","veg3"]},
    {name:"drinks", items:["dr1", "dr2","dr3"]},
    ];

    const getItems = () => {
    const match = items.find(item => item.name === tab);
    return match ? match.items : [];
    };

  return (
    <div>
        
        <ul>
            {items.map((item, index) => (
            <button key={index} onClick={(e) => setTab(item.name)}>{item.name}</button>
            ))}
        </ul>

        <ul>
            {getItems().map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );   
}