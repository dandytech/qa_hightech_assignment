import React from "react";
import { Outlet } from "react-router";
export default function PageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
