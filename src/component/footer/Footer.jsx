

const Footer = () => {
  return (
    
    <footer className="pt-12">
    <div className=" py-10 lg:text-center ">
        <h3 className="font-bold text-3xl">Gadget Heaven</h3>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
          <hr /> 
   <div className="flex  justify-evenly">
    <nav className="flex flex-col">
    <h6 className="font-bold text-black text-[20px]">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav >
  <nav className="flex flex-col">
    <h6 className="font-bold text-black text-[20px]">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav className="flex flex-col">
    <h6 className="font-bold text-black text-[20px]">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
      </div>
      </footer>
     
  );
};

export default Footer;