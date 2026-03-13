import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  { id: 1, title: "About", link: "/about-us" },
  { id: 2, title: "Services", link: "/service" },
  { id: 3, title: "Work", link: "/work" },
  { id: 4, title: "Contact", link: "/contact" },
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
    link: "/work",
    dropdown_menus: [{ title: "Work", link: "/work" }],
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
    dropdown_menus: [{ title: "Contact", link: "/contact" }],
  },
];
