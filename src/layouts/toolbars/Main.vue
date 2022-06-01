<template>
  <div class="d-flex align-items-center justify-content-between">
    <div>
      <el-input
        v-model="searchBox"
        type="text"
        placeholder="Search here"
        size="large"
      >
        <template #prefix>
          <i class="bi bi-search" />
        </template>
      </el-input>
    </div>

    <div>
      <button class="btn btn-icon btn-reversed-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-funnel-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"
          />
        </svg>
      </button>
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

<style></style>
