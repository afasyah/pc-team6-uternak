<template>
  <div id="product">
    {{ route }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "product",
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>
