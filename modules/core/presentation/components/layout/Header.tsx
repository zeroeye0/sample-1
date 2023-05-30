import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Menubar from './Menubar';
import styles from '../../styles/layout/Menubar.module.scss';


const Header: React.FC = () => {

  return (
    <>
      <Head>
        <title></title>
      </Head>
      我是 header
      <Menubar></Menubar>
    </>
  )
};

export default Header;
