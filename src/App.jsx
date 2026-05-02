import { useState } from "react";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <div className="p-4">
      <ItemForm onAdd={handleAdd} />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;