

const DashboardProduct = ({ product }) => {
  const { product_title, product_image, price, description } = product;
  return (
    
      <div className="mt-10 flex shadow-xl  items-center text-black w-10/12 mx-auto gap-10 text-left">
        <div>
          <img
      className="h-[180px] rounded-2xl ml-5 m-3" src={product_image} />
    </div>
 
  <div className=" items-center">
        <h2 className="card-title font-bold">{product_title}</h2>
        <p>{ description}</p>
        <p className=" text-[17px]">{ price}</p>
    
  </div>
</div>
    
  );
};

export default DashboardProduct;