/* eslint-disable no-undef */
// import { list } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utilityCard/utilityCard";


const ProductDetails = () => {
const {product_id} = useParams()
const id = parseInt(product_id)

const data = useLoaderData()
 const singleItem = data.find(product => product.product_id === id)
  const {product_image, product_title, price, description, availability, specification, rating } = singleItem;
  

  const handleAddToCard = (product_id) => {
  addToStoredReadList(product_id)
}
  const haldelWishList = (product_id) => {
  addToStoredWishList(product_id)
}


  return (
    <div className="relative">
      <div className="bg-[#9538e2] w-full mx-auto h-[400px] text-center text-white space-y-3 ">
      <h2 className="font-bold text-3xl pt-5">Product Details</h2>
      <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      
      {/* daynamic card */}
      <div className="card card-side bg-base-100 shadow-xl absolute top-[160px] lg:left-[200px] p-10">
  <figure>
    <img
      className=" h-[400px]" src={product_image} />
  </figure>
  <div className="card-body">
   <h2 className="card-title font-bold text-3xl">{product_title}</h2>
   <p>{ price}</p>
  <button className="rounded-3xl text-[#309c08] w-[100px] bg-[#eaf5e6] border-2 border-[#309c08]">{ availability? 'In Stock': 'Stock Out'}</button>
  <p>{description}</p>

    <div>
   <h2 className="text-xl font-bold">Specification:</h2>
            {
    specification.map((tag, index) => <li key={index}
     className="list-decimal mt-2 text-gray-500 font-semibold text-[16px]">{tag}</li>)
   }
  </div>
          <h3 className="text-black font-bold">Rating</h3>   
          <div className="flex">
            <div className="rating">
<input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f9bf04]" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f9bf04]" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f9bf04]" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f9bf04]" />

<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
</div>
    <div>
    <h5>{ rating}</h5>
     </div>
  </div>    
          
  <div className="flex gap-8 items-center mt-3 ">
  <div className="flex">
    <button onClick={()=>handleAddToCard(product_id)} className="bg-[#8b35d3] py-2 font-bold px-3 rounded-3xl text-white">
       Add To Card <i className="fa-solid fa-cart-plus"></i>
     </button>
     </div>    
  <div className="border-2 p-2 rounded-full text-center border-gray-300">
   <p><i onClick={()=> haldelWishList(product_id)} className="fa-regular fa-heart text-[28px] cursor-pointer"></i></p>
   </div>

</div>
  </div>
</div>
    </div>
  );
};

export default ProductDetails;