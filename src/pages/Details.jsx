import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_BASE_URL } from '../config'

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}/items/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Item not found');
        return res.json();
      })
      .then(setItem)
      .catch((err) => {
        console.error("Fetch error:", err);
      })
  }, [id])

  const updateStatus = async (newStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      if (res.ok) {
        alert(`Status updated to ${newStatus}`)
        navigate('/browse')
      }
    } catch (err) {
      console.error("Update error:", err);
      alert('Failed to update status')
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
        <div className="glass-card h-96 flex items-center justify-center overflow-hidden">
          {item.image ? (
            <img src={`${API_BASE_URL}${item.image}`} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center text-gray-300">
              <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="mt-2 font-semibold">No Image Available</p>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
                <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm ${
                    item.status === 'lost' ? 'bg-red-500 text-white' : 
                    item.status === 'found' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                {item.status}
                </span>
                <span className="text-indigo-600 font-bold uppercase text-xs tracking-widest">{item.category}</span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">{item.title}</h1>
            <p className="text-sm text-gray-400 font-medium">Reported on {new Date(item.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-5 bg-indigo-50/30 border-indigo-100/50">
              <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            <div className="glass-card p-5 bg-violet-50/30 border-violet-100/50">
              <h3 className="text-sm font-black text-violet-600 uppercase tracking-widest mb-2">
                {item.status === 'lost' ? 'Owner Contact' : item.status === 'found' ? 'Finder Contact' : 'Contact Info'}
              </h3>
              <p className="text-gray-700 font-semibold text-lg">{item.contact || "No contact info provided"}</p>
              {item.status === 'found' && (
                <p className="text-xs text-indigo-600 mt-2 font-bold uppercase tracking-wider italic">
                    ← Please contact the finder to claim your item
                </p>
              )}
            </div>
          </div>

          {item.status === 'lost' && (
            <button 
              onClick={() => updateStatus('closed')} 
              className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              Mark as Found
            </button>
          )}

          {item.status === 'found' && (
            <button 
              onClick={() => updateStatus('closed')} 
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              Mark as Returned
            </button>
          )}
          
          {item.status === 'closed' && (
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl text-center space-y-2">
                <span className="text-4xl">🎉</span>
                <p className="text-green-700 font-black text-xl">Item Successfully Recovered!</p>
                <p className="text-green-600/70 text-sm font-medium">This case is now closed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
