import Banner from '../banner/Banner'
import AllCard from '../AllCard/AllCard'
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='pt-28 w-10/12 mx-auto'>
      <AllCard></AllCard>
      </div>
    </div>
  );
};

export default Home;