import React, {useState, useEffect} from 'react';

function CustomModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid black" }}>
      <button onClick={onClose}>Close</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const list1 = ["l11", "l12", "l13"];
  const list2 = ["l21", "l22", "l23"];
  const list3 = ["l31", "l32","l33"];
  return (
    <div>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <CustomModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            data={list1}
        />
    </div>
  );   
}