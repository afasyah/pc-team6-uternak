<template>
  <aside
    class="sidebar d-none d-lg-block m-4 mb-0 pe-2 me-2 overflow-auto scroll-on-hover"
    style="z-index: 50"
  >
    <div v-if="sidebar" class="sidebar-content">
      <div v-for="(item, i) in sidebar.content" :key="i" class="mb-5">
        <p
          class="text-muted text-sm fw-bold m-0 mb-2 px-3"
          v-text="item.group"
        ></p>

        <ul class="list-group">
          <template v-for="(content, i) in item.content" :key="i">
            <li
              v-if="!content.hidden"
              class="list-group-item p-0 mb-1 border-0"
            >
              <router-link
                :to="content.path"
                :exact="content.exact"
                class="d-block btn w-100 px-3 py-2 text-start text-sm btn-text-primary"
              >
                <i :class="content.icon"></i>
                <span class="ms-2">{{ content.name }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const layout = computed(() => store.getters["getLayout"]);

    let group = "Marketplace";
    if (route.meta.group === "marketplace") {
      group = "Marketplace";
    }

    const sidebar = computed(() =>
      layout.value.sidebar.find((item: any) => item.group === group)
    );

    console.log(group, sidebar.value);

    return {
      sidebar,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  height: calc(100vh - 84.25px);
  position: sticky;
  top: 84.25px;

  &-content {
    padding: 16px 0;
  }
}
</style>
