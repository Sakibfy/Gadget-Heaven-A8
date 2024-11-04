import Navbar from './component/navbar/Navbar'
import Footer from "./component/footer/Footer"
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;