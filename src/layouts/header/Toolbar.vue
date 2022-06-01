<template>
  <div
    :class="['toolbar bg-white py-4 px-4', { 'shadow-sm': offsetContent }]"
    style="z-index: 1"
  >
    <template v-if="route.name === 'mythings-application'">
      <ApplicationShow />
    </template>
    <template v-else>
      <MainToolbar />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MainToolbar from "@/layouts/toolbars/Main.vue";
import ApplicationShow from "@/layouts/toolbars/show/Application.vue";

export default defineComponent({
  name: "toolbar",
  components: {
    MainToolbar,
    ApplicationShow,
  },
  setup() {
    const route = useRoute();
    const offsetContent = ref<boolean>(false);

    onMounted(() => {
      const content: any = document.querySelector(".content");
      offsetContent.value = window.scrollY > content.offsetTop - 70;

      window.addEventListener(
        "scroll",
        () => (offsetContent.value = window.scrollY > content.offsetTop - 70)
      );
    });

    return {
      route,
      offsetContent,
    };
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  position: sticky;
  top: 84.2px;
}
</style>
