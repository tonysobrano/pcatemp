import React from "react";
import { Metadata } from "next";
import CartMain from "@/page-views/cart/cart-main";

export const metadata: Metadata = {
  title: "Prime Creative - Cart page",
};

const CartPage = () => {
  return (
    <CartMain/>
  );
};

export default CartPage;
