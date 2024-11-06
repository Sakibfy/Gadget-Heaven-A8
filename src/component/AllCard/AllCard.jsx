import { Outlet, useLoaderData } from "react-router-dom";
import Category from '../../component/Category/Category'

const AllCard = () => {

const Categorydata = useLoaderData()


  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl">Explore Cutting-Edge Gadgets</h2>
      </div>
      {/* card section */}
    <Category Categorydata={Categorydata}></Category>
    <Outlet></Outlet>  
    </div>
    
    
  )
};

export default AllCard;