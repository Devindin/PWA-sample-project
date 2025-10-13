import React, { useState } from "react";
import PageLayout from "../Layout/Pagelayout";
import ListPanel from "../Components/ListPanel";
import DetailsPanel from "../Components/DetailsPanel";
import PageHeader from "../Components/PageHeader";
import { FaPlus } from "react-icons/fa";

const initialCustomers = [
  {
    id: "C001",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St",
    delivery: "FedEx",
    city: "New York",
    zip: "10001",
  },
  {
    id: "C002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "0987654321",
    address: "456 Oak Ave",
    delivery: "UPS",
    city: "Los Angeles",
    zip: "90001",
  },
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

  const handleAdd = () => {
    const newCustomer = {
      id: `C${(customers.length + 1).toString().padStart(3, "0")}`,
      name: "",
      email: "",
      phone: "",
      address: "",
      delivery: "",
      city: "",
      zip: "",
    };
    setCustomers([newCustomer, ...customers]);
    setSelectedCustomer(newCustomer);
    setFormValues(newCustomer);
  };

  const handleSave = () => {
    setCustomers(
      customers.map((c) => (c.id === formValues.id ? formValues : c))
    );
    alert("Customer updated!");
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
    if (selectedCustomer?.id === id) setSelectedCustomer(null);
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 h-screen overflow-hidden p-4">
        <PageHeader
          title="Customers"
          subtitle={`You have ${customers.length} customers`}
        />

        <div className="flex gap-4 flex-1 overflow-hidden">
          <ListPanel
            search={search}
            setSearch={setSearch}
            items={filteredCustomers}
            onAdd={handleAdd}
            onSelect={(c) => {
              setSelectedCustomer(c);
              setFormValues(c);
            }}
            onDelete={handleDelete}
            displayKey="Customer"
          />
          <DetailsPanel
            selected={selectedCustomer}
            formValues={formValues}
            handleChange={(e) =>
              setFormValues({ ...formValues, [e.target.name]: e.target.value })
            }
            onSave={handleSave}
            onDelete={handleDelete}
            fields={[
              "id",
              "name",
              "email",
              "phone",
              "address",
              "city",
              "zip",
              "delivery",
            ]}
            title="Customer"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Customers;
