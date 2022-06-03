<template>
  <nav
    ref="quickNavigation"
    class="bg-primary-light d-flex w-100 align-items-center justify-content-between px-4 py-1"
    style="font-size: 14px"
  >
    <div class="">
      <i class="bi bi-phone me-1"></i>
      Download UTernak
    </div>

    <div>
      <router-link class="text-dark text-decoration-none" to="/about"
        >Tentang UTernak</router-link
      >
      <router-link class="text-dark text-decoration-none ms-3" to="/promo"
        >Promo</router-link
      >
      <router-link
        class="text-dark text-decoration-none ms-3"
        to="/policy/ticketing"
        >Layanan Konsumen</router-link
      >
    </div>
  </nav>
  <header ref="mainHeader" class="header sticky-top bg-white w-100">
    <nav class="d-flex align-items-stretch border-bottom w-100 px-4 py-3">
      <div class="d-flex flex-grow-1 flex-lg-grow-0">
        <div class="d-flex align-items-center">
          <img
            src="/media/logo/logo_primary.png"
            alt="Uternak Logo"
            width="40"
          />

          <span class="ms-2 fs-5 fw-medium text-primary"
            ><span class="fw-bold">U</span>Ternak</span
          >
        </div>
      </div>

      <div class="ms-4 flex-grow-1">
        <el-input v-model="search" class="mb-2" clearable placeholder="Search">
          <template #append>
            <i class="bi bi-search"></i>
          </template>
        </el-input>

        <div class="d-flex align-items-center" style="font-size: 13px">
          <router-link
            to="/marketplace/product/12345
            "
            >Alfafa 1kg</router-link
          >
          <router-link
            class="ms-3"
            to="/marketplace/product/12345
            "
            >Bibit DOC</router-link
          >
          <router-link
            class="ms-3"
            to="/marketplace/product/12345
            "
            >Vaksin I Hep</router-link
          >
          <router-link
            class="ms-3"
            to="/marketplace/product/12345
            "
            >Suplemen Babi</router-link
          >
          <router-link
            class="ms-3"
            to="/marketplace/product/12345
            "
            >Jerami 1 Ton</router-link
          >
        </div>
      </div>

      <div class="ms-4">
        <button class="btn btn-text-primary btn-icon">
          <i class="bi bi-cart"></i>
        </button>
        <button class="btn btn-text-primary btn-icon ms-3">
          <i class="bi bi-bell"></i>
        </button>
      </div>

      <div class="ms-4">
        <div class="dropdown">
          <button
            class="btn-text-primary fw-medium btn btn-icon d-flex"
            data-bs-toggle="dropdown"
          >
            <div class="d-none d-lg-flex flex-column align-items-end">
              <p class="m-0 text-xs fw-light text-muted">Hello</p>
              <p class="m-0 text-xs" v-text="'User'"></p>
            </div>
            <img
              class="rounded-circle ms-2"
              :src="`https://source.boringavatars.com/beam/40/${123}`"
              alt="profile-pic"
              width="40"
            />
          </button>

          <div class="dropdown-menu shadow border-0 p-0">
            <div class="d-flex align-items-center p-3 border-bottom">
              <img
                class="rounded-circle"
                :src="`https://source.boringavatars.com/beam/40/${123}`"
                alt="profile-pic"
                width="50"
              />

              <div class="ms-3">
                <p class="m-0 fw-medium" v-text="'-'"></p>
                <p class="m-0 text-xs text-muted" v-text="'-'"></p>
              </div>
            </div>

            <div class="p-3 py-2">
              <ul class="list-group">
                <li class="list-group-item p-0 border-0">
                  <button
                    class="btn btn-text-primary w-100 text-start text-sm"
                    v-loading.fullscreen.lock="isLoading"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const layout = computed(() => store.getters["getLayout"]);
    const isLoading = ref(false);
    const search = ref("");

    return {
      layout,
      isLoading,
      search,
    };
  },
});
</script>
