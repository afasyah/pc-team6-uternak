import HeaderMenu from "../config/header";
import SidebarMenu, { SidebarContent } from "../config/sidebar";
import { PathBasedMenu } from "@/store/modules/LayoutModule";
import { Role } from "@/store/modules/AuthModule";
import objectPath from "object-path";
import store from "@/store";

export interface LayoutConfig {
  header: PathBasedMenu[];
  sidebar: SidebarContent[];
}

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(role: Role): void {
    const header = LayoutService.initHeader(role);
    const sidebar = LayoutService.initAside(role);

    const layout = {
      header,
      sidebar,
    };

    window.localStorage.setItem("layout", JSON.stringify(layout));
  }

  /**
   * @description init header
   */
  public static initHeader(role: Role): void {
    const header = objectPath.get(HeaderMenu, `${role}HeaderMenu`);

    return header;
  }

  /**
   * @description init aside
   */
  public static initAside(role: Role): void {
    const aside = objectPath.get(SidebarMenu, `${role}SidebarMenu`);

    return aside;
  }
}

export default LayoutService;
