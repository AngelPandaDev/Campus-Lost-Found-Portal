import { useState } from "react";

export default function ItemForm({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "lost",
        category: "Electronics",
        contact: "",
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
            imageFile: form.image, // the actual File object
            image: preview // the preview URL for display
        };

        onAdd(newItem);

        setForm({
            title: "",
            description: "",
            status: "lost",
            category: "Electronics",
            contact: "",
            image: null
        });
        setPreview(null);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto glass-card p-8 space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Report an Item
                </h2>
                <p className="text-gray-500">Provide details about the item you lost or found.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Item Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g. Blue iPhone 13"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            placeholder="Describe where and when you found/lost it..."
                            value={form.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="w-full border border-gray-200 px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            >
                                <option value="lost">🔴 Lost</option>
                                <option value="found">🟢 Found</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="w-full border border-gray-200 px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            >
                                <option value="Electronics">📱 Electronics</option>
                                <option value="Personal">💼 Personal</option>
                                <option value="Documents">📄 Documents</option>
                                <option value="Books">📚 Books</option>
                                <option value="Other">✨ Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Info</label>
                        <input
                            type="text"
                            name="contact"
                            placeholder="Email or Phone Number"
                            value={form.contact}
                            onChange={handleChange}
                            className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Item Image</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-indigo-400 transition-colors bg-white/30 backdrop-blur-sm cursor-pointer relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="space-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-xs text-gray-500">
                                    {form.image ? form.image.name : "Click to upload image"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {preview && (
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/20">
                    <img
                        src={preview}
                        alt="preview"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                    <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Preview</span>
                </div>
            )}

            <button
                type="submit"
                className="w-full btn-primary py-4 text-lg shadow-indigo-200/50"
            >
                Submit Report
            </button>
        </form>
    );
}