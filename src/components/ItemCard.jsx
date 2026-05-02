export default function ItemCard({ item }) {
    return (
        <div className="border rounded-lg p-3 shadow">

            {/* Image */}
            <img
                src={item.image || "https://via.placeholder.com/150"}
                alt="item"
                className="w-full h-40 object-cover rounded"
            />

            {/* Title */}
            <h2 className="text-lg font-semibold mt-2">
                {item.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600">
                {item.description}
            </p>

            {/* Status */}
            <p className="text-sm mt-1">
                Status:{" "}
                <span className={item.status === "lost" ? "text-red-500" : "text-green-500"}>
                    {item.status}
                </span>
            </p>

            {/* View Button */}
            <div className="mt-3">
                <a
                    href={`/item/${item.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    View
                </a>
            </div>
        </div>
    );
}