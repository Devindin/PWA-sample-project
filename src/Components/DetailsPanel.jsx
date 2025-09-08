import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import InputField from "../Components/InputField";

function DetailsPanel({ selected, formValues, handleChange, onSave, onDelete, fields, title }) {
  if (!selected) {
    return (
      <div className="w-2/3 bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow p-6 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          Select a {title.toLowerCase()} to see details
        </p>
      </div>
    );
  }

  return (
    <div className="w-2/3 bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow p-6 flex flex-col gap-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {formValues.name || `New ${title}`}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {fields.map((field) => (
          <InputField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            type={field === "address" || field === "description" ? "textarea" : "text"}
            values={formValues}
            handleChange={handleChange}
            disabled={field === "id"}
            inputClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onSave}
          className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-1 transition-colors"
        >
          <FiEdit /> Save
        </button>
        <button
          onClick={() => onDelete(formValues.id)}
          className="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700 flex items-center gap-1 transition-colors"
        >
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
  );
}

export default DetailsPanel;
