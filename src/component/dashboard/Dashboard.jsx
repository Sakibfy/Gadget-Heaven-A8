/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getProductList } from '../../utilityCard/utilityCard';
import DashboardProduct from '../dashboardProduct/dashboardProduct';

const Dashboard = () => {
const [productList, setProductList] = useState([])
const allProductData = useLoaderData()
  
  useEffect(() => {
  const productList = getProductList();
  const productIdInt = productList.map(id => parseInt(id))
   

    const productitemFilt = allProductData.filter(product => productIdInt.includes(product.product_id));

    
    setProductList(productitemFilt);
  }, [])
  
  
  
  
  return (
    <div className=''>
       <div className="bg-[#9538e2] w-full mx-auto h-[300px] text-center text-white space-y-3 -mb-20 ">
      <h2 className="font-bold text-3xl pt-5">Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      
      <div className=' font-bold text-center'><Tabs>
    <TabList>
      <Tab>Card</Tab>
      <Tab>Wishlish</Tab>
    </TabList>
<div className="flex justify-between mt-20">
        <div> <h2 className='font-bold text-[30px] text-black'>Card</h2></div>
        <div className='flex justify-between gap-10'>
          <div><h2 className='font-bold text-[25px]'>Totalcost: 999$</h2></div>
          <div className=''><button className='border-2 border-[#db63e6] py-2 px-4 rounded-xl mr-8'>Sort by price</button>
          <button className='bg-[#db63e6] py-2 px-3 rounded-xl'>Purchase</button></div>
        </div>
      </div>
    <TabPanel>
            {
              productList.map( product => <DashboardProduct product={product} key={product.product_id}></DashboardProduct> )
            }
    </TabPanel>
    <TabPanel>
      
    </TabPanel>
      </Tabs></div>
      
    </div>
  );
};

export default Dashboard;