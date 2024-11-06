import { Link } from "react-router-dom";



const ItemCard = ({ item }) => {
  const { product_title, product_image, price, product_id } = item || {};


  return (
    <div className="card card-compact   m-5 border-2  border-gray-600 shadow-xl pt-4 items-center ">
  <figure>
    <img
      className="h-[180px] " src={product_image} />
  </figure>
  <div className="card-body items-center">
        <h2 className="card-title font-bold">{ product_title}</h2>
        <p className="text-center text-[17px]">{ price}</p>
    <div className="card-actions ">
      <button className="text-[#d454a3] text-[18px] font-bold border-2 py-2 px-3 mt-3 rounded-2xl border-[#d454a3]"><Link to={`/productDetails/${product_id}`}>View Details</Link></button>
    </div>
  </div>
</div>
  );
};

export default ItemCard;