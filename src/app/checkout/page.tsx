import React from "react";
import { Metadata } from "next";
import CheckoutMain from "@/page-views/checkout/checkout-main";

export const metadata: Metadata = {
  title: "Prime Creative - Checkout page",
};

const CheckoutPage = () => {
  return (
    <CheckoutMain/>
  );
};

export default CheckoutPage;
