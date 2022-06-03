<template>
  <div class="container-fluid px-0 border-start">
    <MarketplaceHeader />

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarketplaceHeader from "./header/MarketplaceHeader.vue";

export default defineComponent({
  components: {
    MarketplaceHeader,
  },
});
</script>

<style lang="scss" scoped>
// .content {
//   padding-top: 84.25px;
// }
</style>
