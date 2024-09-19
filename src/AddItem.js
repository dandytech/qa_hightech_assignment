// src/components/AddItem.js
import React, { useState } from "react";
import { addItem } from "./api";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleAddItem = async (e) => {
    if (!name || !description) return;

    e.preventDefault();
    try {
      await addItem({ name, description });
      setMessage("Item added successfully");
      window.location.reload();
    } catch (error) {
      setMessage("Failed to add item");
    }
  };

  return (
    <form onSubmit={handleAddItem} className="signup-form">
      <p className="title">Add Item</p>
      <p>
        {" "}
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        {" "}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <button type="submit">Add Item</button>
      <p>{message}</p>
    </form>
  );
};

export default AddItem;
