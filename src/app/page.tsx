import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Prime Creative - Jigjiga's First Full-Service Creative Agency",
  description: "Integrated Creative, Development, and Communications Agency.",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
