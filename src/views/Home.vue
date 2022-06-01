<template>
  <div id="home">
    <Header />

    <main class="p-4">
      <!-- Section: Carousel -->
      <div class="carousel mb-5">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
        >
          <swiper-slide>
            <div class="position-relative w-100 rounded">
              <img
                class="main-slide"
                src="@/assets/media/slide_1.png"
                alt="Peternakan Sapi"
                width="100%"
                height="300"
              />

              <div class="slide-text position-absolute text-end text-white">
                <h2>
                  Jawa Timur Kota Penghasil Daging Sapi No. 1 di Indonesia
                </h2>
                <p>Lihat data peternakan sapi terbaik di Jawa Timur!</p>
                <button class="btn btn-primary">Lihat disini</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="position-relative w-100 rounded">
              <img
                class="main-slide"
                src="@/assets/media/slide_1.png"
                alt="Peternakan Sapi"
                width="100%"
                height="300"
              />

              <div class="slide-text position-absolute text-end text-white">
                <h2>
                  Jawa Timur Kota Penghasil Daging Sapi No. 1 di Indonesia
                </h2>
                <p>Lihat data peternakan sapi terbaik di Jawa Timur!</p>
                <button class="btn btn-primary">Lihat disini</button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Section: 1 - Discount -->
      <div class="section-1">
        <div class="section-1__header mb-3">
          <h2 class="title fw-bold">Temukan kebutuhan ternakmu disini!</h2>
        </div>

        <div>
          <div class="rounded w-100 position-relative">
            <img
              class="section-1__image"
              src="@/assets/media/ayam.png"
              alt="Ayam Ternak"
              width="100%"
            />

            <div class="px-4 py-5">
              <div class="d-flex justify-content-center flex-column text-white">
                <h3>Diskon pakan ayam sampai 80%</h3>
                <p>
                  Hanya di toko
                  <router-link to="/marketplace/store/123456"
                    >Peternakan Lembang</router-link
                  >
                </p>
              </div>

              <button class="btn btn-primary mt-3">Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-5 mb-4" />

      <!-- Section: 2 - Profil Peternak -->
      <div class="section-1">
        <div class="section-1__header mb-3">
          <h2 class="title fw-bold">
            Terhubung dengan peternak sekarang juga!
          </h2>
        </div>

        <div>
          <swiper
            class="p-2"
            :spaceBetween="30"
            :slidesPerView="3"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
          >
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/babi.png"
                  alt="Babi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Babi Mas Ibab
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Jakarta, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/sapi.png"
                  alt="Sapi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Sapi Mas Ipas
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Bandung, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/domba.png"
                  alt="Domba"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Domba Mas Abmod
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Semarang, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/sapi.png"
                  alt="Sapi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Sapi Mas Cape
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Bandung, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <hr class="mt-5 mb-4" />

      <!-- Section: 3 - Product Highlight -->
      <div class="section-1">
        <div class="section-1__header mb-3">
          <h2 class="title fw-bold">Tawaran terbaik untukmu!</h2>
        </div>

        <div>
          <swiper
            class="p-2"
            :spaceBetween="30"
            :slidesPerView="3"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
          >
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/babi.png"
                  alt="Babi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Babi Mas Ibab
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Jakarta, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/sapi.png"
                  alt="Sapi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Sapi Mas Ipas
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Bandung, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/domba.png"
                  alt="Domba"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Domba Mas Abmod
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Semarang, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="px-3 py-4 rounded bg-white shadow rounded text-start"
                style="max-width: calc(100vw * 32%)"
              >
                <img
                  class="card-img rounded mb-4"
                  src="@/assets/media/sapi.png"
                  alt="Sapi"
                  width="100%"
                />

                <h4 class="fw-bold fs-4 mb-3" style="max-width: 60%">
                  Peternakan Sapi Mas Cape
                </h4>

                <p class="fs-6 text-gray-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  debitis sint totam cumque modi? Impedit animi.
                </p>

                <div class="d-flex flex-wrap justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-pin-angle"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">
                      Bandung, Indonesia
                    </p>
                  </div>

                  <div class="d-flex align-items-center fs-6">
                    (32)
                    <i class="review-star bi bi-star-fill ms-1"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star-fill"></i>
                    <i class="review-star bi bi-star"></i>
                  </div>
                </div>

                <div class="d-flex flex-wrap justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fs-6 bi bi-telephone"></i>
                    <p class="fs-6 text-primary ms-2 mb-0">+628213129232</p>
                  </div>
                </div>

                <button class="btn btn-primary w-100 fs-6 mt-4">
                  Lihat profil peternak
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import Header from "@/layouts/header/MainHeader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import Footer from "@/layouts/footer/MainFooter.vue";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  name: "home",
  components: {
    Header,
    Swiper,
    SwiperSlide,
    Footer,
  },
  methods: {
    onSwiper(swiper: any) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
});
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .main-slide {
  display: block;
  width: 100%;
  height: calc(100vh - 66.75px);
  object-fit: cover;
}

.slide-text {
  top: 45%;
  right: 30px;
  max-width: 100vw;
}

.card-img {
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.section-1 {
  &__header {
    // margin: 16px 0;
    // max-width: 50vw;

    .title {
      font-size: 32px;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 16px;
  }
}

@media screen and (min-width: 768px) {
  .slide-text {
    right: 80px;
  }
}
</style>
