import Header from '../components/Header';
import {  useSelector } from 'react-redux';
function Home() {
  const user = useSelector((state) => state.user);


  return (
    <>
      <Header />

    </>
  );
}


export default Home;
