<template>
  <header ref="mainHeader" class="header sticky-top bg-white w-100">
    <nav
      class="d-flex align-items-stretch justify-content-between border-bottom w-100 px-4 py-3"
    >
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
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

      <div
        class="ms-8 d-none d-lg-flex justify-content-between align-items-center"
      >
        <div class="text-sm">
          <router-link to="/" exact class="fw-medium btn">Home</router-link>
          <router-link to="/blog" exact class="fw-medium btn ms-2"
            >Tips & Trik</router-link
          >
          <router-link to="/peternakan" exact class="fw-medium btn ms-2"
            >Peternakan di sekitarku</router-link
          >
          <router-link to="/login" exact class="fw-medium btn ms-2"
            >Marketplace</router-link
          >
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

    return {
      layout,
      isLoading,
    };
  },
});
</script>
