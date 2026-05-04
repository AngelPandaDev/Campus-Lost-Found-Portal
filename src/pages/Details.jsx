import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_BASE_URL } from '../config'

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}/items/${id}`)
      .then(res => res.json())
      .then(setItem)
      .catch(() => setItem({ id, title: 'Mock Item', status: 'lost', category: 'Electronics', description: 'Item description', contact: 'contact@example.com', createdAt: new Date().toISOString() }))
  }, [id])

  const markClosed = async () => {
    try {
      await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'closed' })
      })
      alert('Status updated to closed')
      navigate('/browse')
    } catch {
      alert('Demo: Status updated')
      navigate('/browse')
    }
  }

  if (!item) return <div className="text-center py-20 animate-pulse text-indigo-600 font-bold text-xl">Loading...</div>

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-indigo-600 group transition-all">
        <svg className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="glass-card h-96 flex items-center justify-center bg-gray-100 text-gray-300">
          {item.image ? <img src={`${API_BASE_URL}${item.image}`} alt={item.title} className="w-full h-full object-cover rounded-2xl" /> : 
          <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.status === 'lost' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
              {item.status}
            </span>
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <p className="text-indigo-600 font-semibold">{item.category}</p>
          </div>

          <div className="py-6 border-y border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Date Reported</p>
            <p className="font-medium">{new Date(item.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Description</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>

          {item.status !== 'closed' && (
            <button onClick={markClosed} className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Mark as Closed
            </button>
          )}
        </div>
      </div>
    </div>
  )
}