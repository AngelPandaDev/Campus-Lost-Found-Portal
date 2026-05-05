import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../config'

export default function ItemCard({ item }) {
    const imageUrl = item.image && typeof item.image === 'string' && item.image.startsWith('/')
        ? `${API_BASE_URL}${item.image}`
        : item.image;

    return (
        <div className="glass-card group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        item.status === "lost" ? "bg-red-500 text-white" : 
                        item.status === "found" ? "bg-green-500 text-white" : 
                        "bg-gray-500 text-white"
                    }`}>
                        {item.status}
                    </span>
                </div>
            </div>

            <div className="p-5 space-y-3">
                <div className="space-y-1">
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">{item.category}</p>
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
                        {item.title}
                    </h2>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 min-h-[2.5rem]">
                    {item.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] text-gray-400 font-medium uppercase">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recently'}
                    </span>
                    <Link
                        to={`/details/${item.id}`}
                        className="text-indigo-600 font-bold text-sm flex items-center gap-1 group/link"
                    >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}