import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import { PathBasedMenu } from "@/store/modules/LayoutModule";

/**
 * Sets current page breadcrumbs
 * @param {PathBasedMenu} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export const setCurrentPageBreadcrumbs = (
  pageTitle: PathBasedMenu,
  breadcrumbs: Array<string>
): void => {
  store.dispatch(Actions.UPDATE_BREADCRUMB, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs,
  });
};

/**
 * Sets current page breadcrumbs
 * @param {PathBasedMenu} title Current page title name
 */
export const setCurrentPageTitle = (title: PathBasedMenu): void => {
  store.dispatch(Actions.UPDATE_BREADCRUMB, {
    title: title,
  });
};
