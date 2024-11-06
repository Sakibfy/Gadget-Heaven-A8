import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard'
import { useEffect, useState } from "react";

const Card = () => {
  const carddata = useLoaderData()
  const { category } = useParams()
  const [allItem, setAllItem] = useState([])

  useEffect(() => {
    if (category) {
      const itemCategory = [...carddata].filter(items => items.category === category

      )
      setAllItem(itemCategory)
    } else {
      setAllItem(carddata.slice(0, 8))
    }

  }, [carddata, category])



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      
      {
        allItem.map(item => <ItemCard key={item.product_id} item={item}></ItemCard>) 
      }
    </div>
  );
};

export default Card;