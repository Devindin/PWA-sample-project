import React from "react";
import { FiUpload } from "react-icons/fi";

function EntityImageUpload({ image, onUpload }) {
  return (
    <div className="flex items-center gap-4">
      {image ? (
        <img
          src={image}
          alt="Preview"
          className="w-32 h-32 rounded object-cover border"
        />
      ) : (
        <div className="w-32 h-32 flex items-center justify-center border rounded bg-gray-100 text-gray-400">
          No Image
        </div>
      )}
      <label className="flex items-center gap-2 cursor-pointer bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">
        <FiUpload /> Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={onUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default EntityImageUpload;
