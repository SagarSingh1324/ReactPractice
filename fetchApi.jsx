import React, {useState, useEffect} from 'react';

export function App(props) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://api.sampleapis.com/coffee/hot")
      .then(res => res.json())
      .then(data => setData(data));
    },
  []);

  //   using async/await
  
  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://api.sampleapis.com/coffee/hot");
  //       const json = await res.json();
  //       setData(json);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); 
  // }, []); 

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