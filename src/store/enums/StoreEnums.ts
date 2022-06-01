enum Actions {
  LOGIN = "login",
  LOGOUT = "logout",
  SIGN_UP = "signUp",
  UPDATE_LOCALE = "updateLocale",
  UPDATE_BREADCRUMB = "updateBreadcrumb",
  UPDATE_LAYOUT = "updateLayout",
  UPDATE_REGISTER_DATA = "updateRegisterData",
  UPDATE_STEP_1_REGISTER_DATA = "updateStep1RegisterData",
  UPDATE_STEP_2_REGISTER_DATA = "updateStep2RegisterData",
  UPDATE_STEP_3_REGISTER_DATA = "updateStep3RegisterData",
}

enum Mutations {
  SET_CREDENTIALS = "setCredentials",
  SET_TOKEN = "setToken",
  SET_LOCALE = "setLocale",
  SET_BREADCRUMB = "setBreadcrumb",
  SET_LAYOUT = "setLayout",
  SET_REGISTER_DATA = "setRegisterData",
  SET_STEP_1_REGISTER_DATA = "setStep1RegisterData",
  SET_STEP_2_REGISTER_DATA = "setStep2RegisterData",
  SET_STEP_3_REGISTER_DATA = "setStep3RegisterData",
  REMOVE_TOKEN = "removeToken",
  REMOVE_CREDENTIALS = "removeCredentials",
}

export { Actions, Mutations };
