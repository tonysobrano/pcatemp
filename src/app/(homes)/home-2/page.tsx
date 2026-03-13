import React from 'react';
import { Metadata } from 'next';
import HomeTwoMain from '@/page-views/homes/home-2';

export const metadata: Metadata = {
  title: "Prime Creative - Homepage B",
};

const HomePageTwo = () => {
  return (
    <HomeTwoMain/>
  );
};

export default HomePageTwo;
