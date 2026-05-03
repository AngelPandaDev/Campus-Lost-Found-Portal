import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";
import Home from './pages/Home'
import Browse from './pages/Browse'
import Details from './pages/Details'
import Post from './pages/Post'

function App() {

  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-4">
        <ItemForm onAdd={handleAdd} />

        <div className="grid grid-cols-3 gap-4 mt-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <main className="max-w-2xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;