<template>
  <footer
    ref="mainFooter"
    class="footer border border-top-3 border-gray-light py-5 px-6 mt-4"
  >
    <div class="row">
      <div class="col d-flex align-items-center">
        <div>
          <img
            src="/media/logo/logo_full.png"
            width="250"
            alt="Logo UTernak Full"
          />
        </div>
      </div>
      <div class="col">
        <h4 class="fw-bold fs-6 mb-3">UTernak</h4>

        <ul class="list-unstyled">
          <li class="mb-3">
            <router-link to="/about" class="text-decoration-none text-dark">
              Tentang UTernak</router-link
            >
          </li>
          <li class="mb-3">
            <router-link to="/blog" class="text-decoration-none text-dark">
              Blog</router-link
            >
          </li>
          <li class="mb-3">
            <router-link to="/staff" class="text-decoration-none text-dark">
              Staff</router-link
            >
          </li>
          <li>
            <router-link
              to="/advertising"
              class="text-decoration-none text-dark"
            >
              Advertising</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 class="fw-bold fs-6 mb-3">Jual</h4>

        <ul class="list-unstyled mb-4">
          <li class="mb-3">
            <router-link
              to="/marketplace/categories/12345"
              class="text-decoration-none text-dark"
            >
              Bibit Ternak</router-link
            >
          </li>
          <li class="mb-3">
            <router-link
              to="/marketplace/categories/12345"
              class="text-decoration-none text-dark"
            >
              Pakan Ternak</router-link
            >
          </li>
          <li class="mb-3">
            <router-link
              to="/marketplace/categories/12345"
              class="text-decoration-none text-dark"
            >
              Obat Ternak</router-link
            >
          </li>
        </ul>

        <h4 class="fw-bold fs-6 mb-3">Beli</h4>

        <ul class="list-unstyled">
          <li class="mb-3">
            <router-link
              to="/marketplace/categories/12345"
              class="text-decoration-none text-dark"
            >
              Obat Ternak</router-link
            >
          </li>
          <li>
            <router-link
              to="/marketplace/categories/12345"
              class="text-decoration-none text-dark"
            >
              Alat & Teknologi Peternakan</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 class="fw-bold fs-6 mb-3">Panduan & Bantuan</h4>

        <ul class="list-unstyled">
          <li class="mb-3">
            <router-link
              to="/policy/ticketing"
              class="text-decoration-none text-dark"
            >
              Customer Care</router-link
            >
          </li>
          <li class="mb-3">
            <router-link
              to="/policy/terms"
              class="text-decoration-none text-dark"
            >
              Terms of Service</router-link
            >
          </li>
          <li>
            <router-link
              to="/policy/privacy"
              class="text-decoration-none text-dark"
            >
              Privacy Policy</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
