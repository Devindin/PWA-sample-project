import React, { useState } from "react";
import PageLayout from "../Layout/Pagelayout";
import EntityList from "../Components/EntityList";
import EntityDetails from "../Components/EntityDetails";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import InputField from "../Components/InputField";
import PageHeader from "../Components/PageHeader";
import { FaPlus } from "react-icons/fa";

const statusOptions = [
  { value: "Pending", label: "Pending" },
  { value: "Processing", label: "Processing" },
  { value: "Delivered", label: "Delivered" },
  { value: "Cancelled", label: "Cancelled" },
];

const initialOrders = [
  {
    id: "O001",
    customerName: "John Doe",
    customerAddress: "123 Main St, City",
    deliveryAddress: "456 Delivery Rd, City",
    placedDate: "2025-09-05",
    deliveryDate: "2025-09-10",
    status: "Pending",
    deliveryPrice: 200,
    total: 3500,
    remarks: "Handle with care",
    items: [
      {
        code: "I001",
        name: "Item A",
        image: "",
        price: 1500,
        quantity: 2,
      },
      {
        code: "I002",
        name: "Item B",
        image: "",
        price: 500,
        quantity: 1,
      },
    ],
  },
  {
    id: "O002",
    customerName: "Jane Smith",
    customerAddress: "789 Elm St, City",
    deliveryAddress: "321 Delivery Ave, City",
    placedDate: "2025-09-06",
    deliveryDate: "2025-09-12",
    status: "Processing",
    deliveryPrice: 100,
    total: 1200,
    remarks: "",
    items: [
      {
        code: "I003",
        name: "Item C",
        image: "",
        price: 1200,
        quantity: 1,
      },
    ],
  },
];

function Orders({ onSave, onDelete }) {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [placedDateFilter, setPlacedDateFilter] = useState("");
  const [deliveryDateFilter, setDeliveryDateFilter] = useState("");

  // Filter
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      (o.customerName?.toLowerCase() || "").includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase());

    const matchesPlacedDate =
      !placedDateFilter || o.placedDate === placedDateFilter;
    const matchesDeliveryDate =
      !deliveryDateFilter || o.deliveryDate === deliveryDateFilter;

    return matchesSearch && matchesPlacedDate && matchesDeliveryDate;
  });

  // Select
  const handleSelect = (order) => {
    setSelectedOrder(order);
    setFormValues(order);
  };

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Item change
  const handleItemChange = (idx, field, value) => {
    const items = [...(formValues.items || [])];
    items[idx][field] = value;
    setFormValues({ ...formValues, items });
  };

  // Add item
  const handleAddItem = () => {
    const items = [...(formValues.items || [])];
    items.push({
      code: "",
      name: "",
      image: "",
      price: 0,
      quantity: 1,
    });
    setFormValues({ ...formValues, items });
  };

  // Remove item
  const handleRemoveItem = (idx) => {
    const items = [...(formValues.items || [])];
    items.splice(idx, 1);
    setFormValues({ ...formValues, items });
  };

  // Calculate total
  const calculateTotal = () => {
    const itemsTotal = (formValues.items || []).reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0
    );
    return itemsTotal + Number(formValues.deliveryPrice || 0);
  };

  // Add
  const handleAdd = () => {
    const newOrder = {
      id: `O${(orders.length + 1).toString().padStart(3, "0")}`,
      customerName: "",
      customerAddress: "",
      deliveryAddress: "",
      placedDate: new Date().toISOString().split("T")[0],
      deliveryDate: "",
      status: "Pending",
      deliveryPrice: 0,
      total: 0,
      remarks: "",
      items: [],
    };
    setOrders([newOrder, ...orders]);
    handleSelect(newOrder);
  };

  // Save
  const handleSave = () => {
    const updatedOrder = { ...formValues, total: calculateTotal() };
    setOrders(orders.map((o) => (o.id === updatedOrder.id ? updatedOrder : o)));
    alert("Order updated!");
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((o) => o.id !== id));
      if (selectedOrder?.id === id) setSelectedOrder(null);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 h-screen overflow-hidden p-4">
        <PageHeader
          title="Orders"
          // actions={[
          //   <button
          //     key="add"
          //     onClick={handleAdd}
          //     className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          //   >
          //     <FaPlus /> Add Order
          //   </button>,
          // ]}
        />
        <div className="flex gap-4 flex-1 overflow-hidden">
          <EntityList
            entities={filteredOrders}
            search={search}
            setSearch={setSearch}
            onAdd={handleAdd}
            onSelect={handleSelect}
            onDelete={handleDelete}
            extraFilter={
              <div className="flex flex-col gap-2 mb-2">
                <InputField
                  label="Placed Date"
                  name="placedDateFilter"
                  type="date"
                  values={{ placedDateFilter }}
                  handleChange={(e) => setPlacedDateFilter(e.target.value)}
                />
                <InputField
                  label="Delivery Date"
                  name="deliveryDateFilter"
                  type="date"
                  values={{ deliveryDateFilter }}
                  handleChange={(e) => setDeliveryDateFilter(e.target.value)}
                />
              </div>
            }
          />

          {!selectedOrder ? (
            // Empty state
            <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800/60 w-2/3 rounded-xl">
              <p>Select an order to see details</p>
            </div>
          ) : (
            <div className="flex-1 bg-white dark:bg-gray-900 rounded shadow p-4 overflow-auto">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Customer Name"
                  name="customerName"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />
                <InputField
                  label="Customer Address"
                  name="customerAddress"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />
                <InputField
                  label="Delivery Address"
                  name="deliveryAddress"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />

                <InputField
                  label="Placed Date"
                  name="placedDate"
                  type="date"
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />
                <InputField
                  label="Delivery Date"
                  name="deliveryDate"
                  type="date"
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />
                <InputField
                  label="Status"
                  name="status"
                  type="select"
                  options={statusOptions}
                  values={formValues}
                  handleChange={handleChange}
                  requiredfiled
                />

                <InputField
                  label="Delivery Price"
                  name="deliveryPrice"
                  type="number"
                  values={formValues}
                  handleChange={handleChange}
                />
                <InputField
                  label="Remarks"
                  name="remarks"
                  type="text"
                  values={formValues}
                  handleChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Items</h3>
                {(formValues.items || []).map((item, idx) => (
                  <div key={idx} className="flex gap-2 mb-2 items-center">
                    <InputField
                      label="Code"
                      name={`code${idx}`}
                      type="text"
                      values={{ [`code${idx}`]: item.code }}
                      handleChange={(e) =>
                        handleItemChange(idx, "code", e.target.value)
                      }
                    />

                    <InputField
                      label="Name"
                      name={`name${idx}`}
                      type="text"
                      values={{ [`name${idx}`]: item.name }}
                      handleChange={(e) =>
                        handleItemChange(idx, "name", e.target.value)
                      }
                    />
                    <InputField
                      label="Price"
                      name={`price${idx}`}
                      type="number"
                      values={{ [`price${idx}`]: item.price }}
                      handleChange={(e) =>
                        handleItemChange(idx, "price", e.target.value)
                      }
                    />
                    <InputField
                      label="Qty"
                      name={`quantity${idx}`}
                      type="number"
                      values={{ [`quantity${idx}`]: item.quantity }}
                      handleChange={(e) =>
                        handleItemChange(idx, "quantity", e.target.value)
                      }
                    />

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => {
                            handleItemChange(idx, "image", ev.target.result);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="w-32"
                    />
                    {item.image && (
                      <img
                        src={item.image}
                        alt="item"
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    <button
                      onClick={() => handleRemoveItem(idx)}
                      className="text-red-500 font-bold"
                    >
                      X
                    </button>
                  </div>
                ))}

                <button
                  onClick={handleAddItem}
                  className="mt-2 px-4 py-1 bg-purple-600 text-white rounded"
                >
                  Add Item
                </button>
              </div>
              <div className="mt-4 font-bold">Total: {calculateTotal()}</div>
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
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Orders;
