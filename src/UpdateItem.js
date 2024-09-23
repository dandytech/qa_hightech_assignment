import React, { useState, useEffect } from "react";
import { updateItem } from "./api";

const UpdateItem = ({ selectedItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Update the form fields when the selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setDescription(selectedItem.description);
    }
  }, [selectedItem]);

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (!name || !description) return;
    setLoading(true);
    try {
      await updateItem(selectedItem.id, { name, description }); // Assuming you are sending selectedItem.id for updating
      setMessage("Item updated successfully");
      window.location.reload();
    } catch (error) {
      setMessage("Failed to update item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdateItem} className="signup-form">
      <p className="title">Update Item</p>
      <p>
        <input
          type="text"
          placeholder="Updated Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <textarea
          placeholder="Updated Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">
          {loading ? "Updating Item..." : "Update Item"}
        </button>
      </p>
      <p>{message}</p>
    </form>
  );
};

export default UpdateItem;
