<template>
  <div>
    <div>
      <div class="mb-4">
        <h4 class="fw-medium fs-5 pb-3 border-bottom mb-3">
          Personal Information
        </h4>

        <div class="row g-4">
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Name</label>
            <p class="m-0" v-text="registerData.step1.name" />
          </div>
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Email</label>
            <p class="m-0" v-text="registerData.step1.email" />
          </div>
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Phone No.</label>
            <p class="m-0" v-text="`+62${registerData.step1.phone_number}`" />
          </div>
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Company</label>
            <p class="m-0" v-text="registerData.step1.company" />
          </div>
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Gender</label>
            <p class="m-0" v-text="registerData.step1.gender" />
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h4 class="fw-medium fs-5 pb-3 border-bottom mb-3">Credentials</h4>

        <div class="row g-4">
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Username</label>
            <p class="m-0" v-text="registerData.step2.username" />
          </div>
          <div class="col-12 col-md-6">
            <label class="d-block fw-bold mb-1">Password</label>
            <p class="m-0 text-sm"><i>your choosen password</i></p>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h4 class="fw-medium fs-5 pb-3 border-bottom mb-3">
          Payment Information
        </h4>

        <div class="row g-4">
          <template v-if="registerData.step3.type === 'credit'">
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">Name</label>
              <p class="m-0" v-text="registerData.step3.name" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">Email</label>
              <p class="m-0" v-text="registerData.step3.email" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">Address 1</label>
              <p class="m-0" v-text="registerData.step3.address_1" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">Address 2</label>
              <p class="m-0" v-text="registerData.step3.address_2" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">City</label>
              <p class="m-0" v-text="registerData.step3.city" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">State</label>
              <p class="m-0" v-text="registerData.step3.state" />
            </div>
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">ZIP Code</label>
              <p class="m-0" v-text="registerData.step3.zip" />
            </div>
          </template>
          <template v-else-if="registerData.step3.type === 'referral'">
            <div class="col-12 col-md-6">
              <label class="d-block fw-bold mb-1">Referral Code</label>
              <p class="m-0" v-text="registerData.step3.referral_token" />
            </div>
          </template>
          <template v-else-if="registerData.step3.type === 'platiot'">
            <div class="col-12 col-md-6">
              <p class="m-0"><i>Workshop Platiot</i></p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 mt-6"
    >
      <button
        class="btn btn-transparent w-100 order-2 order-lg-1"
        @click="$emit('cancel')"
      >
        Back
      </button>

      <button
        class="btn btn-primary order-1 order-lg-2 w-100"
        @click="onSubmit"
      >
        Sign me up!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "register-payment-info",
  setup(props, { emit }) {
    const store = useStore();
    const isLoading = ref(false);
    const registerData = computed(() => store.getters["getRegisterData"]);

    const onSubmit = () => {
      emit("on-submit");
    };

    return {
      isLoading,
      registerData,
      onSubmit,
    };
  },
});
</script>
