import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import InputField from "../Components/InputField"; // your InputField

const sampleCustomers = [
  {
    id: "C001",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St, New York, NY",
    delivery: "FedEx",
    city: "New York",
    zip: "10001"
  },
  {
    id: "C002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "0987654321",
    address: "456 Oak Ave, Los Angeles, CA",
    delivery: "UPS",
    city: "Los Angeles",
    zip: "90001"
  },
  {
    id: "C003",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "1112223333",
    address: "789 Pine Rd, Chicago, IL",
    delivery: "DHL",
    city: "Chicago",
    zip: "60007"
  },
  {
    id: "C004",
    name: "Bob Williams",
    email: "bob@example.com",
    phone: "4445556666",
    address: "321 Elm St, Miami, FL",
    delivery: "FedEx",
    city: "Miami",
    zip: "33101"
  },
];

function Customers() {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formValues, setFormValues] = useState({});

  const filteredCustomers = sampleCustomers.filter(
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

  const handleEdit = () => console.log("Edit", formValues);
  const handleView = () => console.log("View", formValues);
  const handleDelete = () => console.log("Delete", formValues);

  return (
    <PageLayout>
      <div className="flex gap-4 p-4 h-full">
        {/* Left panel: customer list */}
        <div className="w-1/3 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 flex flex-col">
          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <ul className="flex-1 overflow-y-auto">
            {filteredCustomers.map((cust) => (
              <li
                key={cust.id}
                onDoubleClick={() => handleDoubleClick(cust)}
                className="p-2 cursor-pointer hover:bg-purple-500/20 dark:hover:bg-purple-400/30 rounded mb-1 transition-colors"
              >
                <p className="font-semibold">{cust.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cust.id}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel: selected customer details */}
        <div className="w-2/3 bg-white dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-6 flex flex-col gap-4 overflow-y-auto">
          {selectedCustomer ? (
            <>
              <h2 className="text-2xl font-bold mb-4">{selectedCustomer.name}</h2>

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="ID"
                  name="id"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                  disabled={true}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="City"
                  name="city"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="Address"
                  name="address"
                  type="textarea"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="ZIP Code"
                  name="zip"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="Delivery Service"
                  name="delivery"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleView}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View
                </button>
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
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
