import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import EntityList from "../Components/EntityList";
import EntityDetails from "../Components/EntityDetails";

const initialProducts = [
  {
    id: "P001",
    name: "Men's T-Shirt",
    price: "1200",
    stock: "50",
    category: "Clothing",
    description: "Comfortable cotton T-shirt",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "P002",
    name: "Ladies Dress",
    price: "2500",
    stock: "30",
    category: "Clothing",
    description: "Stylish evening dress",
    image: "https://via.placeholder.com/150",
  },
];

function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formValues, setFormValues] = useState({});

  // Filter
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  // Select
  const handleSelect = (item) => {
    setSelectedProduct(item);
    setFormValues(item);
  };

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setFormValues({ ...formValues, image: imgURL });
    }
  };

  // Add
  const handleAdd = () => {
    const newItem = {
      id: `P${(products.length + 1).toString().padStart(3, "0")}`,
      name: "",
      price: "",
      stock: "",
      category: "",
      description: "",
      image: "",
    };
    setProducts([newItem, ...products]);
    handleSelect(newItem);
  };

  // Save
  const handleSave = () => {
    setProducts(products.map((p) => (p.id === formValues.id ? formValues : p)));
    alert("Saved!");
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setProducts(products.filter((p) => p.id !== id));
      if (selectedProduct?.id === id) setSelectedProduct(null);
    }
  };

  return (
    <PageLayout>
      <div className="flex gap-4 p-4 h-full">
        <EntityList
          entities={filteredProducts}
          search={search}
          setSearch={setSearch}
          onAdd={handleAdd}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />
        <EntityDetails
          entity={selectedProduct}
          formValues={formValues}
          setFormValues={setFormValues}
          onChange={handleChange}
          onSave={handleSave}
          onDelete={handleDelete}
          onImageUpload={handleImageUpload}
        />
      </div>
    </PageLayout>
  );
}

export default Products;
