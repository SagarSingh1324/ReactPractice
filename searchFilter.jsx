import React, {useState, useEffect} from 'react';

export function App() {
  
  const [query, setQuery] = useState("");
  const items = ["apple", "mango", "pineapple", "grapes" ];
  const filteredItems = items.filter( item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );   
}