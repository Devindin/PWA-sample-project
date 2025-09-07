import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import InputField from "../Components/InputField";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi"; // modern icons

const initialCustomers = [
  { id: "C001", name: "John Doe", email: "john@example.com", phone: "1234567890", address: "123 Main St, New York, NY", delivery: "FedEx", city: "New York", zip: "10001" },
  { id: "C002", name: "Jane Smith", email: "jane@example.com", phone: "0987654321", address: "456 Oak Ave, Los Angeles, CA", delivery: "UPS", city: "Los Angeles", zip: "90001" },
  { id: "C003", name: "Alice Johnson", email: "alice@example.com", phone: "1112223333", address: "789 Pine Rd, Chicago, IL", delivery: "DHL", city: "Chicago", zip: "60007" },
  { id: "C004", name: "Bob Williams", email: "bob@example.com", phone: "4445556666", address: "321 Elm St, Miami, FL", delivery: "FedEx", city: "Miami", zip: "33101" },
];

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formValues, setFormValues] = useState({});

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleDoubleClick = (customer) => {
    setSelectedCustomer(customer);
    setFormValues(customer);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      id: `C${(customers.length + 1).toString().padStart(3, "0")}`,
      name: "",
      email: "",
      phone: "",
      address: "",
      delivery: "",
      city: "",
      zip: ""
    };
    setCustomers([newCustomer, ...customers]);
    setSelectedCustomer(newCustomer);
    setFormValues(newCustomer);
  };

  const handleEdit = () => {
    setCustomers(customers.map(c => c.id === formValues.id ? formValues : c));
    alert("Customer updated!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
      if (selectedCustomer?.id === id) setSelectedCustomer(null);
    }
  };

  return (
    <PageLayout>
      <div className="flex gap-4 p-4 h-full">
        {/* Left panel */}
        <div className="w-1/3 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 flex flex-col">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
            />
            <button
              onClick={handleAddCustomer}
              className="ml-2 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1"
            >
              <FiPlus /> Add
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto">
            {filteredCustomers.map((cust) => (
              <li
                key={cust.id}
                onDoubleClick={() => handleDoubleClick(cust)}
                className="p-2 cursor-pointer hover:bg-purple-500/20 dark:hover:bg-purple-400/30 rounded mb-1 transition-colors flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{cust.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cust.id}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDoubleClick(cust)}
                    className="p-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(cust.id)}
                    className="p-1 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel */}
        <div className="w-2/3 bg-white dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-6 flex flex-col gap-4 overflow-y-auto">
          {selectedCustomer ? (
            <>
              <h2 className="text-2xl font-bold mb-4">{selectedCustomer.name || "New Customer"}</h2>
              <div className="grid grid-cols-2 gap-4">
                {["id","email","phone","city","address","zip","delivery"].map((field) => (
                  <InputField
                    key={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    type={field === "address" ? "textarea" : "text"}
                    values={formValues}
                    handleChange={handleChange}
                    disabled={field==="id"} // ID is read-only
                  />
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-1"
                >
                  <FiEdit /> Save
                </button>
                <button
                  onClick={() => handleDelete(formValues.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1"
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Select a customer to see details
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Customers;
