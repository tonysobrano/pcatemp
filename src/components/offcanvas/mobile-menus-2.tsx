"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenusTwo() {
  const pathname = usePathname();

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id}>
            <Link className={pathname === menu.link ? "active" : ""} href={menu.link}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
