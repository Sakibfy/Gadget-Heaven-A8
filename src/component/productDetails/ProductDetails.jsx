import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
const {product_id} = useParams()
const id = parseInt(product_id)


const data = useLoaderData()

 const singleItem = data.find(product => product.product_id === id)
  
  
  
  return (
    <div className="relative">
      <div className="bg-[#9538e2] w-full mx-auto h-[400px] text-center text-white space-y-3 ">
      <h2 className="font-bold text-3xl pt-5">Product Details</h2>
      <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      
      {/* daynamic card */}
      <div className="card card-side bg-base-100 shadow-xl absolute top-[200px] left-[300px]">
  <figure>
    <img
      src={singleItem.product_image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductDetails;