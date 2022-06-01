<template>
  <div class="d-flex align-items-center justify-content-between">
    <div></div>

    <div>
      <router-link
        to="/my-things/application/create"
        class="btn btn-primary d-block text-capitalize"
      >
        Create new application
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const searchBox = ref("");

    return {
      searchBox,
    };
  },
});
</script>
