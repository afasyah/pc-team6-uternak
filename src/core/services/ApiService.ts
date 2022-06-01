import { App } from "vue";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import store from "@/store";
import router from "@/router";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import { Actions } from "@/store/enums/StoreEnums";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    // this.setHeader();
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    return ApiService.vueInstance.axios.get(resource, params).catch((err) => {
      if (err.response?.status === 401) {
        store.dispatch(Actions.LOGOUT).then(() => {
          console.error("session anda telah berakhir");

          router.push({ name: "login" });
        });
      }
      const error = err.response && err.response.data.message;
      return Promise.reject(error);
    });
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(resource: string): Promise<AxiosResponse> {
    // store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    return ApiService.vueInstance.axios.get(`${resource}`).catch((err) => {
      if (err.response?.status === 401) {
        store.dispatch(Actions.LOGOUT).then(() => {
          console.error("session anda telah berakhir");

          router.push({ name: "login" });
        });
      }
      const error = err.response && err.response.data.message;
      return Promise.reject(error);
    });
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: any
   * @param config: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(
    resource: string,
    params?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse> {
    // store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    return ApiService.vueInstance.axios
      .post(`${resource}`, params, config)
      .catch((err) => {
        if (err.response?.status === 401) {
          store.dispatch(Actions.LOGOUT).then(() => {
            console.error("session anda telah berakhir");
            router.push({ name: "login" });
          });
        }
        const error = err.response && err.response.data.message;
        return Promise.reject(error);
      });
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(
    resource: string,
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    return ApiService.vueInstance.axios
      .put(`${resource}/${slug}`, params)
      .catch((err) => {
        if (err.response?.status === 401) {
          store.dispatch(Actions.LOGOUT).then(() => {
            console.error("session anda telah berakhir");

            router.push({ name: "login" });
          });
        }
        const error = err.response && err.response.data.message;
        return Promise.reject(error);
      });
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    // store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    return ApiService.vueInstance.axios.delete(resource).catch((err) => {
      if (err.response?.status === 401) {
        store.dispatch(Actions.LOGOUT).then(() => {
          console.error("session anda telah berakhir");

          router.push({ name: "login" });
        });
      }
      const error = err.response && err.response.data.message;
      return Promise.reject(error);
    });
  }
}

export default ApiService;
