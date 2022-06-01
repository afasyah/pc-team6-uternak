import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Role } from "./AuthModule";
import LayoutService, { LayoutConfig } from "@/core/services/LayoutService";

export interface PathBasedMenu {
  name: string;
  path: string;
  hidden?: boolean;
  exact?: boolean;
  icon?: string;
}

interface LayoutInfo {
  role: Role;
  layout: LayoutConfig;
}

@Module
export default class LayoutModule extends VuexModule implements LayoutInfo {
  role = window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user") as string).roles.role_name
    : "user";
  layout =
    window.localStorage.getItem("layout") &&
    window.localStorage.getItem("layout") !== "undefined"
      ? JSON.parse(window.localStorage.getItem("layout") as string)
      : {
          header: null,
          sidebar: null,
        };

  /**
   * Get Layout
   * @returns object
   */
  get getLayout(): LayoutConfig {
    return this.layout;
  }

  @Mutation
  [Mutations.SET_LAYOUT](role: Role): void {
    LayoutService.init(role);
  }

  @Action({ rawError: true })
  [Actions.UPDATE_LAYOUT](role: Role): void {
    this.context.commit(Mutations.SET_LAYOUT, role);
  }
}
