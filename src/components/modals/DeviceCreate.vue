<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="deviceCreateModal"
    aria-labelledby="deviceCreateModalLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-primary" id="offcanvasExampleLabel">
        Create New Device
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
        :model="device"
        ref="deviceForm"
        class="form mb-4"
        :rules="deviceFormRules"
        @submit.prevent="onSubmit"
      >
        <el-form-item prop="device_name" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Device Name</label>
          <el-input
            v-model="device.device_name"
            type="text"
            placeholder="Masukkan nama perangkat"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="description" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Description</label>
          <el-input
            v-model="device.description"
            type="text"
            placeholder="Masukkan deskripsi perangkat"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="type" class="mb-3" required>
          <label class="d-block fw-bold mb-1 w-100">Device Type</label>
          <el-select
            v-model="device.type"
            size="large"
            placeholder="Masukkan tipe perangkat"
          >
            <el-option
              v-for="item in deviceOptions"
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
import { Device as deviceFormRules } from "@/core/helpers/validation";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const route = useRoute();
    const $toast: any = inject("$toast");
    const deviceForm = ref();
    const device = ref({
      device_name: "",
      description: "",
      type: "",
    });
    const deviceOptions = [
      {
        label: "Platiot",
        value: "platiot",
      },
      {
        label: "Tasmota",
        value: "tasmota",
      },
      {
        label: "ESP Home",
        value: "esphome",
      },
    ];
    const closeBtn = ref();

    const loadDevices = async () => {
      try {
        await store.dispatch(Actions.GET_DEVICES, {
          query: {
            page: 1,
            limit: 10,
            search: "",
          },
          id: route.params.app_id,
        });
      } catch (e) {
        $toast.error(`Terjadi Kesalahan, ${e}`);
      }
    };

    const onSubmit = async () => {
      isLoading.value = true;
      deviceForm.value.validate(async (valid: boolean) => {
        if (valid) {
          try {
            await store.dispatch(Actions.CREATE_DEVICE, {
              ...device.value,
              app_id: route.params.app_id,
            });

            await loadDevices();
            $toast.success("Perangkat berhasil dibuat");
            closeBtn.value.click();
            device.value = {
              device_name: "",
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
      device,
      deviceOptions,
      deviceForm,
      deviceFormRules,
      closeBtn,
      onSubmit,
    };
  },
});
</script>
