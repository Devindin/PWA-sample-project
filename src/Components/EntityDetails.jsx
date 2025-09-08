import React from "react";
import InputField from "./InputField";
import EntityImageUpload from "./EntityImageUpload";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function EntityDetails({
  entity,
  formValues,
  setFormValues,
  onChange,
  onSave,
  onDelete,
  onImageUpload,
}) {
  if (!entity) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        Select an item to see details
      </p>
    );
  }

  return (
    <div className="w-2/3 bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow p-6 flex flex-col gap-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {entity.name || "New Item"}
      </h2>

      {/* Image */}
      <EntityImageUpload image={formValues.image} onUpload={onImageUpload} />

      {/* Fields */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {["id", "name", "price", "stock", "category", "description"].map(
          (field) => (
            <InputField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              type={field === "description" ? "textarea" : "text"}
              values={formValues}
              handleChange={onChange}
              disabled={field === "id"}
              inputClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
            />
          )
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4 justify-end">
        {/* Save Button */}
        <button
          onClick={onSave}
          className="px-5 py-2.5 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all duration-200"
        >
          <FiEdit className="text-lg" />
          Save
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(formValues.id)}
          className="px-5 py-2.5 flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200"
        >
          <FiTrash2 className="text-lg" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default EntityDetails;
