import React from 'react';
import useRWD from 'modules/core/application/useRWD';
import { Banners } from 'modules/homepage/interfaces/http/homepage.http.interface';
import styles from '../styles/Banner.module.scss';

type BannerProps = {
  banners: Banners[]
}

const Banners: React.FC<BannerProps> = ({ banners }) => {
  return (
    <>
      <section className="card">
        ewfdasfdas
      </section>
    </>
  );
}

export default Banners;
