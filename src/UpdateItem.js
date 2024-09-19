// src/components/UpdateItem.js
import React, { useState } from "react";
import { updateItem } from "./api";

const UpdateItem = ({ token, itemId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (!name || !description) return;
    try {
      await updateItem(itemId, { name, description }, token);
      setMessage("Item updated successfully");
    } catch (error) {
      setMessage("Failed to update item");
    }
  };

  return (
    <form onSubmit={handleUpdateItem} className="signup-form">
      <p className="title">Update Item</p>
      <p>
        {" "}
        <input
          type="text"
          placeholder="Updated Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        {" "}
        <textarea
          placeholder="Updated Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        {" "}
        <button type="submit">Update Item</button>
      </p>
      <p>{message}</p>
    </form>
  );
};

export default UpdateItem;
