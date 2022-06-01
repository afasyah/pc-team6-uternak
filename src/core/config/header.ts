import { PathBasedMenu } from "@/store/modules/LayoutModule";

const adminHeaderMenu: PathBasedMenu[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    hidden: false,
  },
  {
    name: "Services",
    path: "/service",
    hidden: false,
  },
  {
    name: "Settings",
    path: "/settings",
    hidden: false,
  },
];

const userHeaderMenu: PathBasedMenu[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    hidden: false,
  },
  {
    name: "My Things",
    path: "/my-things",
    hidden: false,
  },
  {
    name: "Settings",
    path: "/settings",
    hidden: false,
  },
];

export default { adminHeaderMenu, userHeaderMenu };
