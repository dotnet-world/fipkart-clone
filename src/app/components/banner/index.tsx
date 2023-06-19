'use client';
/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import classes from './Banner.module.css';
import { BannerResponsive } from './BannerResponsive';
import 'react-multi-carousel/lib/styles.css';
import { BannerItems } from './BannerItems';
import NextArrowButton from '../common/NextArrowButton';
import PrevArrowButton from '../common/PrevArrowButton';

const Banner = () => {
  return (
    <div className={classes.banerContainer}>
      <Carousel
        autoPlay
        responsive={BannerResponsive}
        infinite={true}
        keyBoardControl={true}
        autoPlaySpeed={5000}
        customRightArrow={<NextArrowButton />}
        customLeftArrow={<PrevArrowButton />}
      >
        {BannerItems.map((item, index) => {
          return (
            <div key={index} className="h-full w-full">
              <img src={item} alt="banner" className="h-90" loading="lazy" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
