import React, { useEffect, useState } from "react";
import "./index.css";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import DeleteItem from "./DeleteItem";
import { getItems } from "./api";

export default function Dashboard() {
  const [addItem, setAddItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [deleteI, setDeleteItem] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenAdd = () => {
    setAddItem(!addItem);
  };

  const handleOpenEdit = (item) => {
    setEditItem(!editItem);
    setSelectedItem((cur) => (cur?.id === item.id ? null : item));
  };

  const handleDeleteItem = (item) => {
    setDeleteItem(!deleteI);
    setSelectedItem((cur) => (cur?.id === item.id ? null : item));
  };

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch token from local storage or wherever it's stored
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems(token);
        setItems(response.data); // Assuming response.data contains the items
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch items");
        setLoading(false);
      }
    };

    fetchItems();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  function logout() {
    // Remove the token from localStorage
    localStorage.removeItem("hToken");

    // Redirect the user to the login page (or any other page)
    window.location.href = "/"; // Adjust the path to your app's login page
  }

  return (
    <div>
      <button onClick={logout} className="link">
        🏠Home
      </button>
      <p className="title">LIST OF ITEMS</p>

      <p>
        <hr></hr>
      </p>
      <p className={`hide ${addItem ? "show" : ""}`}>
        <AddItem />
      </p>
      <p className={`hide ${editItem ? "show" : ""} `}>
        <UpdateItem selectedItem={selectedItem} />
      </p>
      <p className={`hide ${deleteI ? "show" : ""} `}>
        <DeleteItem selectedItem={selectedItem} />
      </p>
      <div>
        <p className="container">
          <span className="sn">#</span>
          <span className="name">Name</span>
          <span className="desc">Description</span>
          <button
            className={`additembutton ${editItem || deleteI ? "hide" : ""} `}
            onClick={handleOpenAdd}
          >
            {!addItem ? "   + Add Item" : "Close"}
          </button>
        </p>
        {items.map((item, i) => (
          <p className="container2" key={item.id}>
            <span className="sn">{i + 1}</span>
            <span className="name">{item.name}</span>
            <span className="desc">{item.description}</span>
            <span className="action">
              {" "}
              <button
                onClick={() => handleOpenEdit(item)} // Pass item as argument
                className={` ${addItem || deleteI ? "hide" : ""} `}
              >
                {!editItem ? "Edit" : "Close"}
              </button>
              <button
                onClick={() => handleDeleteItem(item)}
                className={` ${addItem || editItem ? "hide" : ""} `}
              >
                {!deleteI ? "   Delete" : "Close"}
              </button>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
