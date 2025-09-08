import React from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

function ListPanel({ search, setSearch, items, onAdd, onSelect, onDelete, displayKey }) {
  return (
    <div className="w-1/3 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 flex flex-col">
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
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.id}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onSelect(item)}
                className="p-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="p-1 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPanel;
