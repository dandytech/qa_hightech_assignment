import { Outlet } from "react-router-dom";

export default function DasboardLayout() {
  return (
    <div className="dashboard">
      <Outlet />
    </div>
  );
}
