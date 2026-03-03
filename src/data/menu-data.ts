import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  { id: 1, title: "About", link: "/about-us" },
  { id: 2, title: "Services", link: "/service" },
  { id: 3, title: "Work", link: "/parallax-slider" },
  { id: 4, title: "Blog", link: "/blog-modern" },
  { id: 5, title: "Contact", link: "/contact-2" },
];

export default menu_data;

export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
  {
    id: 1,
    title: "About",
    link: "/about-us",
    dropdown_menus: [{ title: "About", link: "/about-us" }],
  },
  {
    id: 2,
    title: "Services",
    link: "/service",
    dropdown_menus: [{ title: "Services", link: "/service" }],
  },
  {
    id: 3,
    title: "Work",
    link: "/parallax-slider",
    dropdown_menus: [{ title: "Work", link: "/parallax-slider" }],
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog-modern",
    dropdown_menus: [{ title: "Blog", link: "/blog-modern" }],
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact-2",
    dropdown_menus: [{ title: "Contact", link: "/contact-2" }],
  },
];
