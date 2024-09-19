// src/api.js
import axios from "axios";
import { getToken } from "./utils/getToken";

const API_URL = "https://qa-test-9di7.onrender.com"; // Replace with your API base URL

export const signup = (userData) => {
  return axios.post(`${API_URL}/auth/signup`, userData);
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const addItem = (itemData) => {
  return axios.post(`${API_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const updateItem = (itemId, updatedData) => {
  return axios.put(`${API_URL}/items/${itemId}`, updatedData, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const deleteItem = (itemId) => {
  return axios.delete(`${API_URL}/items/${itemId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const getItems = () => {
  return axios.get(`${API_URL}/items`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
