import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    tags: "",
    images: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("category", formData.category);
      form.append("type", formData.type);
      form.append("size", formData.size);
      form.append("condition", formData.condition);
      form.append("tags", formData.tags);
      formData.images.forEach((img) => form.append("images", img));

      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        body: form,
      });

      const result = await res.json();
      if (res.ok) {
        alert("Item listed successfully!");
        navigate("/dashboard");
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to list item. Try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">List a New Item</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Item Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Vintage Denim Jacket"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Include condition, size, usage history, etc."
              rows={4}
              className="w-full px-4 py-2 border rounded"
              required
            ></textarea>
          </div>

          {/* Drag & Drop */}
          <div
            className="border border-dashed border-gray-400 p-6 text-center rounded-lg bg-gray-50 cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="block cursor-pointer">
              <p className="text-gray-500">
                Drag & drop your images here, or <span className="text-blue-500 underline">browse</span>
              </p>
            </label>
          </div>

          {/* Preview */}
          {formData.images.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {formData.images.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${i + 1}`}
                  className="rounded h-24 w-full object-cover border"
                />
              ))}
            </div>
          )}

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option>Select a category</option>
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Footwear</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="e.g., Shirt, Shoes"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Size</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="e.g., M, L"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option>Select condition</option>
                <option>Like New</option>
                <option>Gently Used</option>
                <option>Worn</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g., sustainable, summer, vintage"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button type="reset" className="px-4 py-2 border rounded hover:bg-gray-100">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              List Item
            </button>
          </div>
        </form>

        {/* Preview Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Listing Preview</h2>
          <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
            {formData.images.length > 0 ? (
              <img
                src={URL.createObjectURL(formData.images[0])}
                alt="Preview"
                className="h-full w-full object-cover rounded"
              />
            ) : (
              <p className="text-gray-400">No Image</p>
            )}
          </div>
          <div className="mt-4">
            <p className="font-medium">{formData.title || "Untitled Item"}</p>
            <p className="text-sm text-gray-500">
              {formData.description || "A brief description of your item will appear here."}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {formData.tags ? `#${formData.tags.split(",").join(" #")}` : "No tags added."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
