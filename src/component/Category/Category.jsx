import { Link } from "react-router-dom";


const Category = ({ Categorydata }) => {
  
  return (
    <div role="tablist" className="tabs tabs-boxed">
      {
        Categorydata.map(category => (<Link key={category.id} to='./cards' role="tab" className="tab">{ category.category}</Link>))
      }

   </div>
  );
};

export default Category;