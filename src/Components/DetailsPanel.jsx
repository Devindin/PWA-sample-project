import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import InputField from "../Components/InputField";

function DetailsPanel({
  selected,
  formValues,
  handleChange,
  onSave,
  onDelete,
  fields,
  title,
}) {
  return (
    <div className="w-2/3 bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow p-6 flex flex-col overflow-y-auto h-full">
      {!selected ? (
        // Empty state → still inside white card
        <div className="flex flex-1 items-center justify-center dark:bg-gray-900/80">
          <p className="text-gray-500 dark:text-white text-lg">
            Select a {title.toLowerCase()} to see details
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {formValues.name || `New ${title}`}
          </h2>

          <div className="grid grid-cols-2 gap-4 dark:bg-gray-900/80">
            {fields.map((field) => (
              <InputField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                type={
                  field === "address" || field === "description"
                    ? "textarea"
                    : "text"
                }
                values={formValues}
                handleChange={handleChange}
                disabled={field === "id"}
                inputClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
            ))}
          </div>

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
        </>
      )}
    </div>
  );
}

export default DetailsPanel;
