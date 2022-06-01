<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="moduleCreateModal"
    aria-labelledby="moduleCreateModalLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-primary" id="offcanvasExampleLabel">
        Create New Module
      </h5>
      <button
        ref="closeBtn"
        type="button"
        class="btn-close text-primary text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <el-form
        :model="module"
        ref="moduleForm"
        class="form mb-4"
        :rules="moduleFormRules"
        @submit.prevent="onSubmit"
      >
        <el-form-item prop="module_name" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Module Name</label>
          <el-input
            v-model="module.module_name"
            type="text"
            placeholder="Masukkan nama modul"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="description" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Description</label>
          <el-input
            v-model="module.description"
            type="text"
            placeholder="Masukkan deskripsi modul"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="type" class="mb-3" required>
          <label class="d-block fw-bold mb-1 w-100">Module Type</label>
          <el-select
            v-model="module.type"
            size="large"
            placeholder="Masukkan tipe perangkat"
          >
            <el-option
              v-for="item in moduleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <button
          type="submit"
          class="btn btn-primary w-100"
          v-loading.fullscreen.lock="isLoading"
        >
          Submit
        </button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Module as moduleFormRules } from "@/core/helpers/validation";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const route = useRoute();
    const $toast: any = inject("$toast");
    const moduleForm = ref();
    const module = ref({
      module_name: "",
      description: "",
      type: "",
    });
    const moduleOptions = [
      {
        label: "Actuator",
        value: "actuator",
      },
    ];
    const closeBtn = ref();

    const loadModules = async () => {
      try {
        await store.dispatch(Actions.GET_MODULES, {
          query: {
            page: 1,
            limit: 10,
            search: "",
          },
          app_id: route.params.app_id,
          device_id: route.params.device_id,
        });
      } catch (e) {
        $toast.error(`Terjadi Kesalahan, ${e}`);
      }
    };

    const onSubmit = async () => {
      isLoading.value = true;
      moduleForm.value.validate(async (valid: boolean) => {
        if (valid) {
          try {
            await store.dispatch(Actions.CREATE_MODULE, {
              ...module.value,
              app_id: route.params.app_id,
              device_id: route.params.device_id,
            });

            await loadModules();
            $toast.success("Modul berhasil dibuat");
            closeBtn.value.click();
            module.value = {
              module_name: "",
              description: "",
              type: "",
            };
          } catch (e) {
            $toast.error(`Terjadi Kesalahan, ${e}`);
          } finally {
            isLoading.value = false;
          }
        } else {
          isLoading.value = false;
          $toast.warning("Mohon periksa kembali form anda");
        }
      });
    };

    return {
      isLoading,
      module,
      moduleOptions,
      moduleForm,
      moduleFormRules,
      closeBtn,
      onSubmit,
    };
  },
});
</script>
