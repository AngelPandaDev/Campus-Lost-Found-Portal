import { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import { API_BASE_URL } from '../config'

export default function Browse() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch(`${API_BASE_URL}/items`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(setItems)
      .catch((err) => {
        console.error("Fetch error:", err);
      })
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold">Browse Items</h1>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
          {['all', 'lost', 'found', 'closed'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.filter(i => filter === 'all' || i.status === filter).map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
