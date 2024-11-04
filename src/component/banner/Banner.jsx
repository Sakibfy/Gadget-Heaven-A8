import bannerImage from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="relative mb-44 lg:mb-80">
      <div className=" bg-[#9538E2] w-full lg:h-[600px] h-[400px] text-center rounded-2xl mt-2  text-white space-y-3">
      <h1 className="font-bold lg:text-[56px] text-[30px] pt-16 lg:w-9/12 flex mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="w-7/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className="bg-white rounded-3xl font-bold text-[#9538e2] px-3 py-2">Shop Now</button>
    </div>
      <div className='absolute lg:top-[360px] lg:left-[250px] left-[100px] top-[300px]'>
        <img className='lg:h-[600px] h-[300px] rounded-2xl' src={bannerImage}
        />
      </div>
</div>
    
  );
};

export default Banner;