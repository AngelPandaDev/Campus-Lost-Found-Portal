import { useState } from "react";

export default function ItemForm({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "lost",
        image: null
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, image: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now().toString(),
            ...form,
            image: preview
        };

        onAdd(newItem);

        setForm({
            title: "",
            description: "",
            status: "lost",
            image: null
        });
        setPreview(null);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto bg-white p-5 rounded-2xl shadow-md border space-y-3"
        >
            <h2 className="text-xl font-bold text-gray-800 text-center">
                Add Item
            </h2>

            {/* Title */}
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />

            {/* Description */}
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />

            {/* Status */}
            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="lost">🔴 Lost</option>
                <option value="found">🟢 Found</option>
            </select>

            {/* Upload */}
            <div className="border-2 border-dashed rounded-lg p-3 text-center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Upload an image
                </p>
            </div>

            {/* Preview */}
            {preview && (
                <img
                    src={preview}
                    alt="preview"
                    className="w-full h-40 object-cover rounded-lg"
                />
            )}

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
                Add Item
            </button>
        </form>
    );
}