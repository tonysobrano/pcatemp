import React from "react";
import { Metadata } from "next";
import ShopMain from "@/page-views/shop/shop-main";

export const metadata: Metadata = {
  title: "Prime Creative - Shop page",
};

const ShopPage = () => {
  return (
    <ShopMain/>
  );
};

export default ShopPage;
