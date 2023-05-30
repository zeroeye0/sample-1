import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/layout/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footer}></div>
    </>
  )
};

export default Footer;
