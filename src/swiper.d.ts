declare module "swiper/vue" {
  import { DefineComponent } from "vue";

  export const Swiper: DefineComponent<any, any, any>;
  export const SwiperSlide: DefineComponent<any, any, any>;
}

// declare module "swiper/core" {
//   import { DefineComponent } from "vue";

//   export const SwiperCore: DefineComponent<any>;
//   export const use: DefineComponent<any>;
//   export const Autoplay: DefineComponent<any>;
//   export const Pagination: DefineComponent<any>;
//   export const Navigation: DefineComponent<any>;
// }
