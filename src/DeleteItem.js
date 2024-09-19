import React, { useState } from "react";

import { deleteItem } from "./api";

const DeleteItem = ({ token, itemId }) => {
  const [message, setMessage] = useState("");

  const handleDeleteItem = async () => {
    try {
      await deleteItem(itemId, token);
      setMessage("Item deleted successfully");
    } catch (error) {
      setMessage("Failed to delete item");
    }
  };

  return (
    <div className="signup-form">
      <p className="title">Delete Item</p>
      <p>Are you sure?</p>
      <button onClick={handleDeleteItem}>Delete Item</button>

      <p>{message}</p>
    </div>
  );
};

export default DeleteItem;
