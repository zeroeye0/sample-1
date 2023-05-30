import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import useRWD from 'modules/core/application/useRWD';

// Interface, Type
import type { NextPage } from 'next';

// Homepage components
import Banners from '../components/Banners';

const Home: NextPage = () => {

  const device = useRWD();

  return (
    <main>
      <Banners banners={[]}/>
    </main>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  return {
    props: {},
  };
};
