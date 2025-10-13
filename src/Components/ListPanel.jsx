import React from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

function ListPanel({
  search,
  setSearch,
  items,
  onAdd,
  onSelect,
  onDelete,
  displayKey,
}) {
  return (
    <div className="w-1/3 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 flex flex-col h-full">
      {/* Search & Add */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder={`Search ${displayKey.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
        />
        <button
          onClick={onAdd}
          className="ml-2 px-3 py-2 bg-primary_button_bg text-white rounded  flex items-center gap-1"
        >
          <FiPlus /> Add
        </button>
      </div>

      {/* List */}
      <ul className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <li
            key={item.id}
            onDoubleClick={() => onSelect(item)}
            className="p-2 cursor-pointer hover:bg-purple-500/20 dark:hover:bg-purple-400/30 rounded mb-1 transition-colors flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-black dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.id}
              </p>
            </div>

            {/* Modern Action Buttons */}
            <div className="flex gap-2">
              {/* Edit */}
              <button
                onClick={() => onSelect(item)}
                className="px-3 py-2 flex items-center gap-1 rounded-lg border border-yellow-400 
                     text-yellow-500 hover:bg-yellow-100/30 dark:hover:bg-yellow-400/20 
                     transition-all duration-200 active:scale-95"
              >
                <FiEdit className="text-sm" />
              </button>

              {/* Delete */}
              <button
                onClick={() => onDelete(item.id)}
                className="px-3 py-2 flex items-center gap-1 rounded-lg border border-red-400 
                     text-red-500 hover:bg-red-100/30 dark:hover:bg-red-400/20 
                     transition-all duration-200 active:scale-95"
              >
                <FiTrash2 className="text-sm" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPanel;
