import React from 'react';
import Banner from '../Banner/Banner';
import Charts from '../Charts/Charts';
import Contact from '../Contact/Contact';
import DepositoVideo from '../DepositoVideo/DepositoVideo';
import Footer from '../Footer/Footer';
import RestockChart from '../RestockChart/RestockChart';
import TopItems from '../TopItems/TopItems';

const Home = () => {
    return (
        <>
        <Banner></Banner>
      <TopItems></TopItems>
      <Charts></Charts>
      <RestockChart></RestockChart>
      <DepositoVideo></DepositoVideo>
      <Contact></Contact>
      <Footer></Footer>
        </>
      
    );
};

export default Home;