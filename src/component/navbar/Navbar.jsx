import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
    <li className="text-xl mr-6 text-[16px] "><NavLink to="/">Home</NavLink>  </li>
    <li className="text-xl mr-5 text-[16px]"><NavLink to={"/Statistics"}>Statistics</NavLink></li>
    <li className="text-xl mr-4 text-[16px]"><NavLink to={"/Dashboard"}>Dashboard</NavLink></li>
   
  </>
  return (
    <div className="navbar  mt-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-60  shadow ">
       {links}
      </ul>
    </div>
    <a className="text-2xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-8 mx-4  items-center">
       {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className=" btn text-2xl"><i className="fa-solid fa-cart-plus"></i></a>
    <a className="btn text-2xl "><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
  );
};

export default Navbar;