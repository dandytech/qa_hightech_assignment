import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import PageLayout from "./PageLayout";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import DasboardLayout from "./DasboardLayout";
import Dashboard from "./Dashboard";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import { useState } from "react";
import DeleteItem from "./DeleteItem";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [itemId, setItemId] = useState(""); // Set with a valid item ID for update/delete

  return (
    <div className="App">
      <p className="welcome">
        {" "}
        Welcome to HighTech QA Assignment from DANIEL AMAECHI NWANKWO
      </p>

      <div>
        <BrowserRouter>
          <Routes>
            {/* main route */}
            <Route element={<PageLayout />}>
              <Route index element={<Navigate replace to="login" />} />

              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>

            {/* Dasboard route */}
            <Route
              path="user"
              element={
                <ProtectedRoute>
                  <DasboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard itemId={itemId} />} />
              <Route path="additem" element={<AddItem />} />{" "}
              <Route
                path="updateitem"
                element={<UpdateItem itemId={itemId} setItemId={setItemId} />}
              />
              <Route
                path="deleteitem"
                element={<DeleteItem itemId={itemId} />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
