<template>
  <div id="marketplace" class="px-6 py-4">
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
        :navigation="false"
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
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Section: 2 - Produk pilihan -->
    <div class="section-1">
      <div class="section-1__header">
        <h2 class="title fs-4 fw-bold">Produk terbaik untukmu</h2>
      </div>

      <hr class="my-2" />

      <div>
        <swiper class="p-2" :spaceBetween="16" :slidesPerView="6">
          <swiper-slide v-for="i in 8" :key="i">
            <router-link
              to="/marketplace/product/12345"
              class="d-block p-2 rounded bg-white shadow rounded text-start text-decoration-none"
              style="max-width: 200px"
            >
              <img
                class="card-img rounded mb-3"
                src="@/assets/media/babi.png"
                alt="Babi"
                width="100%"
              />

              <h4 class="fs-6 mb-2 fw-light" style="max-width: 60%">
                Alfafa 1Kg
              </h4>

              <p class="fw-bold mb-0" style="font-size: 14px">Rp 32.000</p>

              <div
                class="px-2 py-1 d-inline-block bg-primary-light text-primary fw-bold my-2 rounded"
                style="font-size: 12px"
              >
                Diskon 20%
              </div>

              <div class="d-flex flex-wrap justify-content-between">
                <div class="d-flex align-items-center">
                  <i class="bi bi-shop" style="font-size: 14px"></i>
                  <p class="ms-1 mb-0" style="font-size: 12px">Afasyah Store</p>
                </div>
              </div>

              <div class="d-flex align-items-center" style="font-size: 12px">
                <i
                  class="review-star bi bi-star-fill me-1"
                  style="font-size: 14px"
                ></i>
                4.5
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Section: 3 - Product di sekitar user -->
    <div class="section-1 mt-4">
      <div class="section-1__header">
        <h2 class="title fs-4 fw-bold">Produk di sekitarmu</h2>
      </div>

      <hr class="my-2" />

      <div>
        <div class="p-2 row row-cols-6 g-3">
          <div v-for="i in 12" :key="i" class="col">
            <router-link
              to="/marketplace/product/12345"
              class="d-block p-2 rounded bg-white shadow rounded text-start text-decoration-none"
              style="max-width: 200px"
            >
              <img
                class="card-img rounded mb-3"
                src="@/assets/media/babi.png"
                alt="Babi"
                width="100%"
              />

              <h4 class="fs-6 mb-2 fw-light" style="max-width: 60%">
                Alfafa 1Kg
              </h4>

              <p class="fw-bold mb-0" style="font-size: 14px">Rp 32.000</p>

              <div
                class="px-2 py-1 d-inline-block bg-primary-light text-primary fw-bold my-2 rounded"
                style="font-size: 12px"
              >
                Diskon 20%
              </div>

              <div class="d-flex flex-wrap justify-content-between">
                <div class="d-flex align-items-center">
                  <i class="bi bi-shop" style="font-size: 14px"></i>
                  <p class="ms-1 mb-0" style="font-size: 12px">Afasyah Store</p>
                </div>
              </div>

              <div class="d-flex align-items-center" style="font-size: 12px">
                <i
                  class="review-star bi bi-star-fill me-1"
                  style="font-size: 14px"
                ></i>
                4.5
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import MainFooter from "@/layouts/footer/MainFooter.vue";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  name: "marketplace-index",
  components: {
    Swiper,
    SwiperSlide,
    MainFooter,
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
  height: calc(50vh);
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
  height: 200px;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .slide-text {
    right: 80px;
  }
}
</style>
