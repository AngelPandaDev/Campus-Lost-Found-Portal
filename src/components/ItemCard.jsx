import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
    let imageUrl = item.image;
    if (imageUrl && typeof imageUrl === 'string' && imageUrl[0] === '/') {
        try {
            const { API_BASE_URL } = require('../config');
            imageUrl = API_BASE_URL + imageUrl;
        } catch {}
    }

    return (
        <div className="border rounded-lg p-3 shadow">
            <img
                src={imageUrl || "https://via.placeholder.com/150"}
                alt="item"
                className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">
                {item.title}
            </h2>
            <p className="text-sm text-gray-600">
                {item.description}
            </p>
            <p className="text-sm mt-1">
                Status:{" "}
                <span className={item.status === "lost" ? "text-red-500" : "text-green-500"}>
                    {item.status}
                </span>
            </p>
            <div className="mt-3">
                <Link
                    to={`/details/${item.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    View
                </Link>
            </div>
        </div>
    );
}