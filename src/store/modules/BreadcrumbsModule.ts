import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { PathBasedMenu } from "./LayoutModule";

interface Breadcrumb {
  title: PathBasedMenu;
  pageBreadcrumbPath: Array<string>;
}

interface StoreInfo {
  breadcrumbs: Breadcrumb;
}

@Module
export default class BreadcrumbsModule extends VuexModule implements StoreInfo {
  breadcrumbs = {
    title: {
      name: "",
      path: "",
      hidden: false,
    },
    pageBreadcrumbPath: [],
  } as Breadcrumb;

  /**
   * Get breadcrumb object for current page
   * @returns object
   */
  get getBreadcrumbs(): Breadcrumb {
    return this.breadcrumbs;
  }

  /**
   * Get breadcrumb array for current page
   * @returns object
   */
  get pageBreadcrumbPath(): Array<string> {
    return this.breadcrumbs.pageBreadcrumbPath;
  }

  /**
   * Get current page title
   * @returns string
   */
  get pageTitle(): PathBasedMenu {
    return this.breadcrumbs.title;
  }

  @Mutation
  [Mutations.SET_BREADCRUMB](payload: Breadcrumb): void {
    this.breadcrumbs = payload;
  }

  @Action({ rawError: true })
  [Actions.UPDATE_BREADCRUMB](payload: Breadcrumb): void {
    this.context.commit(Mutations.SET_BREADCRUMB, payload);
  }
}
