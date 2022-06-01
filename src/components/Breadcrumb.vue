<template>
  <el-breadcrumb class="py-4" separator-class="el-icon-arrow-right">
    <template v-if="breadcrumbs.title.path && breadcrumbs.title.name">
      <el-breadcrumb-item :to="{ path: breadcrumbs.title.path }">
        <i class="bi bi-house-door-fill text-primary me-1"></i>
        {{ breadcrumbs.title.name }}
      </el-breadcrumb-item>
    </template>
    <template v-if="breadcrumbs.pageBreadcrumbPath.length">
      <template v-for="(path, i) in breadcrumbs.pageBreadcrumbPath" :key="i">
        <el-breadcrumb-item>{{ path }}</el-breadcrumb-item>
      </template>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "breadcrumb",
  props: {
    breadcrumbs: {
      type: Object,
      default() {
        return {
          title: {
            name: "",
            path: "",
            hidden: false,
          },
          pageBreadcrumbPath: [],
        };
      },
    },
  },
});
</script>
