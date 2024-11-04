import { useLoaderData } from "react-router-dom";
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
      
      
      {/* <div className="grid grid-cols-4">

      <div role="tablist" className="tabs tabs-boxed">
     <a role="tab" className="tab">Tab 1</a>
   </div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl  mt-16">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
  //   </div> */}
  {/* // </div> */}
  {/* //   </div> */}
      {/* </div> */}




    </div>
    
    
  )
};

export default AllCard;