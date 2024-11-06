import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="mt-56 text-center">
      <h2 className="text-6xl text-center font-bold">404</h2>
      <h3 className="text-4xl text-center">page not found</h3>
      <button className='text-center text-xl font-bold bg-[#9538e2] inline-block text-white py-1 mt-2 px-3 rounded-xl'>
         <Link to="/">Back</Link>
       </button>
    </div>
  );
};

export default Errorpage;