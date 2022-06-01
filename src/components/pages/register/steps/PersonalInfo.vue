<template>
  <el-form
    :model="personalInfo"
    ref="register1Form"
    class="form mb-4"
    :rules="personalInfoRules"
    @submit.prevent="onSubmit"
  >
    <el-form-item prop="name" class="mb-3" required>
      <label class="fw-bold mb-1">Name</label>
      <el-input
        v-model="personalInfo.name"
        type="text"
        placeholder="Masukkan nama anda"
        size="large"
      ></el-input>
    </el-form-item>

    <el-form-item prop="company" class="mb-3" required>
      <label class="fw-bold mb-1">Company</label>
      <el-input
        v-model="personalInfo.company"
        type="text"
        placeholder="Masukkan instansi/sekolah anda"
        size="large"
      ></el-input>
    </el-form-item>

    <el-form-item prop="email" class="mb-3" required>
      <label class="fw-bold mb-1">Email</label>
      <el-input
        v-model="personalInfo.email"
        type="text"
        placeholder="Masukkan email anda"
        size="large"
      ></el-input>
    </el-form-item>

    <el-form-item prop="phone_number" class="mb-4" required>
      <label class="fw-bold mb-1">Phone Number</label>
      <el-input
        v-model="personalInfo.phone_number"
        type="text"
        placeholder="Masukkan nomor telepon anda"
        size="large"
      >
        <template #prepend> +62 </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="gender" class="mb-3" required>
      <label class="fw-bold me-4">Gender</label>
      <div>
        <el-radio v-model="personalInfo.gender" label="Male" border
          >Male</el-radio
        >
        <el-radio v-model="personalInfo.gender" label="Female" border
          >Female</el-radio
        >
        <el-radio v-model="personalInfo.gender" label="Not_Say" border
          >Prefer not to say</el-radio
        >
      </div>
    </el-form-item>

    <div
      class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 mt-6"
    >
      <button
        type="button"
        class="btn btn-transparent w-100 order-2 order-lg-1"
        @click="$emit('cancel')"
      >
        Cancel
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
import { PersonalInformation as personalInfoRules } from "@/core/helpers/validation";

export default defineComponent({
  name: "register-personal-information",
  setup(props, { emit }) {
    const $toast: any = inject("$toast");
    const store = useStore();
    const register1Form = ref();
    const isLoading = ref(false);
    const personalInfo = computed(() => store.getters["getStep1RegisterData"]);

    const onSubmit = () => {
      register1Form.value.validate(async (valid: boolean) => {
        if (valid) {
          console.log(personalInfo.value);
          emit("on-submit");
        } else {
          isLoading.value = false;
          $toast.warning("Mohon periksa kembali form anda");
        }
      });
    };

    return {
      register1Form,
      isLoading,
      personalInfo,
      personalInfoRules,
      onSubmit,
    };
  },
});
</script>
