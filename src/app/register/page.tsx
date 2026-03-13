import React from "react";
import { Metadata } from "next";
import RegisterMain from "@/page-views/register/register-main";

export const metadata: Metadata = {
  title: "Prime Creative - Register page",
};

const RegisterPage = () => {
  return (
    <RegisterMain/>
  );
};

export default RegisterPage;
