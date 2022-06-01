<template>
  <div>
    <div class="d-flex align-items-center gap-4 mb-4">
      <button
        type="button"
        :class="[
          'btn',
          paymentInfo.type === 'credit' ? 'btn-primary' : 'btn-secondary',
        ]"
        @click="paymentInfo.type = 'credit'"
      >
        Debit/Credit Card
      </button>

      <button
        type="button"
        :class="[
          'btn',
          paymentInfo.type === 'referral' ? 'btn-primary' : 'btn-secondary',
        ]"
        @click="paymentInfo.type = 'referral'"
      >
        I have referral code
      </button>

      <button
        type="button"
        :class="[
          'btn',
          paymentInfo.type === 'platiot' ? 'btn-primary' : 'btn-secondary',
        ]"
        @click="paymentInfo.type = 'platiot'"
      >
        PLATIOT
      </button>
    </div>

    <el-form
      :model="paymentInfo"
      ref="register2Form"
      class="form mb-4"
      :rules="paymentFormRules"
      @submit.prevent="onSubmit"
    >
      <template v-if="paymentInfo.type === 'credit'">
        <el-form-item prop="name" class="mb-3" required>
          <label class="fw-bold mb-1">Name</label>
          <el-input
            v-model="paymentInfo.name"
            type="text"
            placeholder="Masukkan nama anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="email" class="mb-3" required>
          <label class="fw-bold mb-1">Email</label>
          <el-input
            v-model="paymentInfo.email"
            type="text"
            placeholder="Masukkan email anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="address_1" class="mb-3" required>
          <label class="fw-bold mb-1">Address 1</label>
          <el-input
            v-model="paymentInfo.address_1"
            type="text"
            placeholder="Masukkan alamat utama anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="address_2" class="mb-3">
          <label class="fw-bold mb-1">Address 2</label>
          <el-input
            v-model="paymentInfo.address_2"
            type="text"
            placeholder="Masukkan alamat kedua anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="city" class="mb-3" required>
          <label class="fw-bold mb-1">City</label>
          <el-input
            v-model="paymentInfo.city"
            type="text"
            placeholder="Masukkan kota anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="state" class="mb-3" required>
          <label class="fw-bold mb-1">State/Province</label>
          <el-input
            v-model="paymentInfo.state"
            type="text"
            placeholder="Masukkan provinsi anda"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop="zip" class="mb-3" required>
          <label class="fw-bold mb-1">Zip Code</label>
          <el-input
            v-model="paymentInfo.zip"
            type="text"
            placeholder="Masukkan kode pos anda"
            size="large"
          ></el-input>
        </el-form-item>
      </template>
      <template v-else-if="paymentInfo.type === 'referral'">
        <el-form-item prop="referral_token" class="mb-3" required>
          <label class="fw-bold mb-1">Referral Code</label>
          <el-input
            v-model="paymentInfo.referral_token"
            type="text"
            placeholder="Masukkan kode referral anda"
            size="large"
          ></el-input>
        </el-form-item>
      </template>

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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from "vue";
import { useStore } from "vuex";
import { PaymentInformation as paymentInfoRules } from "@/core/helpers/validation";

export default defineComponent({
  name: "register-payment-info",
  setup(props, { emit }) {
    const $toast: any = inject("$toast");
    const store = useStore();
    const register2Form = ref();
    const isLoading = ref(false);
    const paymentInfo = computed(() => store.getters["getStep3RegisterData"]);
    const paymentFormRules = computed(() => {
      if (paymentInfo.value.type === "credit") {
        return paymentInfoRules;
      } else if (paymentInfo.value.type === "referral") {
        return { referral_token: paymentInfoRules.referral_token };
      }

      return {};
    });

    const onSubmit = () => {
      register2Form.value.validate(async (valid: boolean) => {
        if (valid) {
          console.log(paymentInfo.value);
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
      paymentInfo,
      paymentInfoRules,
      paymentFormRules,
      onSubmit,
    };
  },
});
</script>
