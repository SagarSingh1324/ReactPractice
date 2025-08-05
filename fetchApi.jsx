import React, {useState, useEffect} from 'react';

export function App(props) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://api.sampleapis.com/coffee/hot")
      .then(res => res.json())
      .then(data => setData(data));
    },
  []);

  return(
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index} style={{color:"white"}}>
              {item.title}
            </li>
            ))
          }
         </ul>
      </div>
  );    
}