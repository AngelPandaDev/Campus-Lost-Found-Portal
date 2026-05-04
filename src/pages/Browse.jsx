import { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import { API_BASE_URL } from '../config'

export default function Browse() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch(`${API_BASE_URL}/items`)
      .then(res => res.json())
      .then(setItems)
      .catch(() => setItems([
        { id: "1", title: 'iPhone 13', status: 'lost', createdAt: new Date().toISOString(), category: 'Electronics' },
        { id: "2", title: 'Wallet', status: 'found', createdAt: new Date().toISOString(), category: 'Personal' }
      ]))
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold">Browse Items</h1>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
          {['all', 'lost', 'found'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.filter(i => i.status !== 'closed' && (filter === 'all' || i.status === filter)).map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
