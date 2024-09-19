import { useNavigate } from "react-router-dom";
import { getToken } from "./utils/getToken";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate;

  // Fetch token from local storage or wherever it's stored
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  if (!token) {
    return;
  }
  //if (isAuthenticated) return children;
  if (token) return children;
}
