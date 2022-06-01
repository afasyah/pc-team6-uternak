<template>
  <el-form
    :model="credentials"
    ref="register2Form"
    class="form mb-4"
    :rules="credentialRules"
    @submit.prevent="onSubmit"
  >
    <el-form-item prop="username" class="mb-3" required>
      <label class="fw-bold mb-1">Username</label>
      <el-input
        v-model="credentials.username"
        type="text"
        placeholder="Masukkan username anda"
        size="large"
      ></el-input>
    </el-form-item>

    <el-form-item prop="password" class="mb-4" required>
      <label class="fw-bold mb-1">Password</label>
      <el-input
        v-model="credentials.password"
        type="password"
        placeholder="Masukkan password anda"
        size="large"
      ></el-input>
    </el-form-item>

    <div
      class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 mt-6"
    >
      <button
        type="button"
        class="btn btn-transparent w-100 order-2 order-lg-1"
        @click="$emit('cancel')"
      >
        Back
      </button>

      <button type="submit" class="btn btn-primary order-1 order-lg-2 w-100">
        Next
      </button>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from "vue";
import { useStore } from "vuex";
import { PersonalInformation as credentialRules } from "@/core/helpers/validation";

export default defineComponent({
  name: "register-credential",
  setup(props, { emit }) {
    const $toast: any = inject("$toast");
    const store = useStore();
    const register2Form = ref();
    const isLoading = ref(false);
    const credentials = computed(() => store.getters["getStep2RegisterData"]);

    const onSubmit = () => {
      register2Form.value.validate(async (valid: boolean) => {
        if (valid) {
          console.log(credentials.value);
          emit("on-submit");
        } else {
          isLoading.value = false;
          $toast.warning("Mohon periksa kembali form anda");
        }
      });
    };

    return {
      register2Form,
      isLoading,
      credentials,
      credentialRules,
      onSubmit,
    };
  },
});
</script>
