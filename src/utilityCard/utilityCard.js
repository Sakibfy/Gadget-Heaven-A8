import { toast } from "react-toastify";


const getProductList  = () => {
  const storedListStr = localStorage.getItem('product List')
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else {
    return [];
}


}

const addToStoredReadList = (id) => {
  const storedList = getProductList();

  if (storedList.includes(id)) {
    toast.error('already exists');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList); 
    localStorage.setItem('product List', storedListStr)
    toast.success('This Product is added .')
  }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
      }
      else {
      return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        toast.error('already exists in the wish list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
      localStorage.setItem('wish-list', storedWishListStr);
       toast.success('This Product is added in Wish list.')
    }
}

export {addToStoredReadList, addToStoredWishList, getProductList }