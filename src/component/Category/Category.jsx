import { NavLink } from "react-router-dom";


const Category = ({ Categorydata }) => {

  return (
    <div role="tablist" className="lg:p-2 py-3 mt-7 lg:flex justify-center border-2 border-[#8e36d7] lg:w-6/12 rounded-full mx-auto">
      {
        Categorydata.map(category => (
          <NavLink key={category.id} to={`/card/${category.category}`}
          
          role="tab" className={({ isActive }) => `tab  ${isActive ? 'bg-[#8e36d7] text-[15px] rounded-xl text-white font-bold' : ''}`}>
          {category.category}</NavLink>))
      }

   </div>
  );
};

export default Category;