import React, { useState } from "react";
import PageLayout from "../Layout/Pagelayout";
import ListPanel from "../Components/ListPanel";
import DetailsPanel from "../Components/DetailsPanel";
import PageHeader from "../Components/PageHeader";
import { FaPlus } from "react-icons/fa";

const initialDeliveries = [
  {
    id: "D001",
    orderId: "O001",
    customer: "John Doe",
    assignedTo: "Driver A",
    pickupDate: "2025-09-06",
    deliveryDate: "2025-09-10",
    status: "Pending",
    remarks: "Fragile items",
  },
  {
    id: "D002",
    orderId: "O002",
    customer: "Jane Smith",
    assignedTo: "Driver B",
    pickupDate: "2025-09-07",
    deliveryDate: "2025-09-12",
    status: "In Transit",
    remarks: "",
  },
];

function Delivery() {
  const [deliveries, setDeliveries] = useState(initialDeliveries);
  const [search, setSearch] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [filterDate, setFilterDate] = useState("");

  //  Filter by search + date
  const filteredDeliveries = deliveries.filter((d) => {
    const matchesSearch =
      d.customer.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.orderId.toLowerCase().includes(search.toLowerCase());

    const matchesDate =
      !filterDate ||
      d.pickupDate === filterDate ||
      d.deliveryDate === filterDate;

    return matchesSearch && matchesDate;
  });

  //Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Add new delivery
  const handleAdd = () => {
    const newDelivery = {
      id: `D${(deliveries.length + 1).toString().padStart(3, "0")}`,
      orderId: "",
      customer: "",
      assignedTo: "",
      pickupDate: new Date().toISOString().split("T")[0],
      deliveryDate: "",
      status: "Pending",
      remarks: "",
    };
    setDeliveries([newDelivery, ...deliveries]);
    setSelectedDelivery(newDelivery);
    setFormValues(newDelivery);
  };

  //  Save changes
  const handleSave = () => {
    setDeliveries(
      deliveries.map((d) => (d.id === formValues.id ? formValues : d))
    );
    alert("Delivery updated!");
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this delivery?")) {
      setDeliveries(deliveries.filter((d) => d.id !== id));
      if (selectedDelivery?.id === id) setSelectedDelivery(null);
    }
  };

  return (
    <PageLayout>
        <div className="flex flex-col gap-4 h-full p-4">
    
        <PageHeader
          title="Delivery"
          subtitle={"You have customers"}
          // actions={[
          //   <button
          //     key="add"
              
          //     className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          //   >
          //     <FaPlus /> Add Customer
          //   </button>,
          // ]}
        />
          <div className="flex gap-4 p-4 h-full">
        <ListPanel
          search={search}
          setSearch={setSearch}
          items={filteredDeliveries}
          onAdd={handleAdd}
          onSelect={(d) => {
            setSelectedDelivery(d);
            setFormValues(d);
          }}
          onDelete={handleDelete}
          displayKey="Delivery"
        />

        {/* Right: delivery details */}

        <DetailsPanel
          selected={selectedDelivery}
          formValues={formValues}
          handleChange={handleChange}
          onSave={handleSave}
          onDelete={handleDelete}
          fields={[
            "id",
            "orderId",
            "customer",
            "assignedTo",
            "pickupDate",
            "deliveryDate",
            "status",
            "remarks",
          ]}
          title="Delivery"
        />
        </div>
      </div>
    </PageLayout>
  );
}

export default Delivery;
