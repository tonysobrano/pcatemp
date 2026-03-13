import React from "react";
import { Metadata } from "next";
import LoginMain from "@/page-views/login/login-main";

export const metadata: Metadata = {
  title: "Prime Creative - Login page",
};

const LoginPage = () => {
  return (
    <LoginMain/>
  );
};

export default LoginPage;
