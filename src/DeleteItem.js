import React, { useState } from "react";

import { deleteItem } from "./api";

const DeleteItem = ({ selectedItem }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeleteItem = async () => {
    setLoading(true);
    try {
      await deleteItem(selectedItem.id);
      setMessage("Item deleted successfully");
      window.location.reload();
    } catch (error) {
      setMessage("Failed to delete item");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="signup-form">
      <p className="title">Delete Item</p>
      <p>
        Are you sure you want to delete <b>{selectedItem?.name}</b> ?
      </p>
      <button onClick={handleDeleteItem}>
        {loading ? "Deleting Item..." : "Delete Item"}
      </button>
      {loading && <p>Loading...</p>}
      <p>{message}</p>
    </div>
  );
};

export default DeleteItem;
