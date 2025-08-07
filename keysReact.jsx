import {useState, useEffect} from 'react';

export function App() {
  
  const [items, setItems] = useState(["apple", "mango", "pineapple", "grapes"]);

  const addItem = () => {
    const newItems = [...items, "new item 1"];
    setItems(newItems);
  }

  const deleteItem = (item) => {
    const newItems = items.filter( fruit => (fruit !== item));
    setItems(newItems);
  }

  return (
    <div>
        <ul>
            <button onClick={addItem}>add new item</button>
            {items.map((item, index) => (
            <li key={item}>
                {item}
                <button onClick={()=>deleteItem(item)}>delete item</button>
            </li>
            ))}
        </ul>
    </div>
  );   
}