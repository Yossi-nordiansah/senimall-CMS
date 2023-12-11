import Content from "../component/content";
import Artwork from "../component/artwork";
import Sidebar from "../component/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Ubah sesuai dengan cara penyimpanan token Anda
  useEffect(() => {
    if (token === "owner") {
      navigate("/owner");
    } else if (token === "admin") {
      navigate("/admin", { state: name.state });
    } else {
      navigate("/");
    }
  }, [token]);
  const name = useLocation();
  const adminName = name.state;
  return (
    <div className="w-full min-h-screen flex ">
      <Sidebar name={adminName} />
      <Artwork />
      {/* <Outlet/> */}
    </div>
  );
}
