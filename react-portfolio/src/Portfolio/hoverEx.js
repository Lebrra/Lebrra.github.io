import React, { useState } from 'react';

function MultipleHoverItems() {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: hoveredItemId === item.id ? 'lightgreen' : 'white',
            padding: '10px',
            margin: '5px',
            border: '1px solid gray',
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default MultipleHoverItems;