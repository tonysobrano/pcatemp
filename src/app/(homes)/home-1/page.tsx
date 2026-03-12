import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Prime Creative - Jigjiga's First Full-Service Creative Agency",
  description: "Integrated Creative, Development, and Communications Agency.",
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
