import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
