import { createStore } from "vuex";
import { config } from "vuex-module-decorators";
import { Actions, Mutations } from "./enums/StoreEnums";

import AuthModule from "./modules/AuthModule";
import RegisterUser from "./modules/RegisterUserModule";
import BreadcrumbsModule from "./modules/BreadcrumbsModule";
import LayoutModule from "./modules/LayoutModule";

config.rawError = true;

export interface Meta {
  page: string;
  limit: string;
}

export default createStore({
  state: {
    locale: window.localStorage.getItem("locale") || "en",
  },
  mutations: {
    [Mutations.SET_TOKEN](state, value) {
      state.locale = value;
      window.localStorage.setItem("setToken", value);
    },
  },
  actions: {
    [Actions.UPDATE_LOCALE]({ commit }, locale) {
      commit(Mutations.SET_LOCALE, locale);
    },
  },
  modules: {
    AuthModule,
    RegisterUser,
    BreadcrumbsModule,
    LayoutModule,
  },
});
