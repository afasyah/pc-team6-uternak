<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createToaster } from "@meforma/vue-toaster";
import "./assets/scss/index.scss";

export default defineComponent({
  name: "app",
  setup() {
    const app: any = getCurrentInstance()?.appContext.app;
    const toaster = createToaster({
      position: "top-right",
      duration: 3000,
    });
    provide("$toast", toaster);
    provide("app", app);

    return {};
  },
});
</script>
