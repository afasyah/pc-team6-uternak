<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="commandCreateModal"
    aria-labelledby="commandCreateModalLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-primary" id="offcanvasExampleLabel">
        Create New Command
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
        :model="command"
        ref="commandForm"
        class="form mb-4"
        :rules="
          command.type === 'tasmota'
            ? { ...commandFormRules, ...commandTasmotaRules }
            : commandFormRules
        "
        @submit.prevent="onSubmit"
      >
        <el-form-item prop="command" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Command</label>
          <el-input
            v-model="command.command"
            type="text"
            placeholder="Masukkan perintah"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="description" class="mb-3" required>
          <label class="d-block fw-bold mb-1">Description</label>
          <el-input
            v-model="command.description"
            type="text"
            placeholder="Masukkan deskripsi perintah"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="type" class="mb-3" required>
          <label class="d-block fw-bold mb-1 w-100">Command Type</label>
          <el-select
            v-model="command.type"
            size="large"
            placeholder="Masukkan tipe perintah"
          >
            <el-option
              v-for="item in commandOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item prop="status" class="mb-3" required>
          <label class="d-block fw-bold mb-1 w-100">Command Status</label>
          <el-switch
            v-model="command.status"
            active-text="Active"
            inactive-text="Inactive"
          >
          </el-switch>
        </el-form-item> -->

        <template v-if="command.type === 'tasmota'">
          <el-form-item prop="tasmotaCommand" class="mb-3" required>
            <label class="d-block fw-bold mb-1">Tasmota Command</label>
            <el-input
              v-model="command.tasmotaCommand"
              type="text"
              placeholder="Masukkan perintah"
              size="large"
            ></el-input>
          </el-form-item>

          <el-form-item prop="tasmotaTopic" class="mb-3" required>
            <label class="d-block fw-bold mb-1">Tasmota Topic</label>
            <el-input
              v-model="command.tasmotaTopic"
              type="text"
              placeholder="Masukkan perintah"
              size="large"
            ></el-input>
          </el-form-item>
        </template>

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
import {
  Command as commandFormRules,
  TasmotaCommand as commandTasmotaRules,
} from "@/core/helpers/validation";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const route = useRoute();
    const $toast: any = inject("$toast");
    const commandForm = ref();
    const command = ref({
      command: "",
      description: "",
      type: "",
      // status: true,
      tasmotaCommand: undefined,
      tasmotaTopic: undefined,
    });
    const commandOptions = [
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

    const loadCommands = async () => {
      try {
        await store.dispatch(Actions.GET_COMMANDS, {
          query: {
            page: 1,
            limit: 10,
            search: "",
          },
          app_id: route.params.app_id,
          device_id: route.params.device_id,
          module_id: route.params.module_id,
        });
      } catch (e) {
        $toast.error(`Terjadi Kesalahan, ${e}`);
      }
    };

    const onSubmit = async () => {
      isLoading.value = true;
      commandForm.value.validate(async (valid: boolean) => {
        if (valid) {
          try {
            await store.dispatch(Actions.CREATE_COMMAND, {
              ...command.value,
              app_id: route.params.app_id,
              device_id: route.params.device_id,
              module_id: route.params.module_id,
            });

            await loadCommands();
            $toast.success("Perintah berhasil dibuat");
            closeBtn.value.click();
            command.value = {
              command: "",
              description: "",
              type: "",
              // status: true,
              tasmotaCommand: undefined,
              tasmotaTopic: undefined,
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
      command,
      commandOptions,
      commandForm,
      commandFormRules,
      commandTasmotaRules,
      closeBtn,
      onSubmit,
    };
  },
});
</script>
