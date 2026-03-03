"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "@/data/menu-data";

const HeaderMenus = () => {
  const pathname = usePathname();

  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link className={pathname === menu.link ? "active" : ""} href={menu.link}>
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
