<template>
  <div class="container-fluid px-0 border-start my-4">
    <Toolbar class="mt-n4" />

    <div class="px-4">
      <Breadcrumb :breadcrumbs="breadcrumbs" />

      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import Toolbar from "@/layouts/header/Toolbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default defineComponent({
  components: {
    Toolbar,
    Breadcrumb,
  },
  setup() {
    const store = useStore();
    const breadcrumbs = computed(() => store.getters.getBreadcrumbs);

    return {
      breadcrumbs,
    };
  },
});
</script>

<style lang="scss" scoped>
// .content {
//   padding-top: 84.25px;
// }
</style>
