<template>
  <div class="d-lg-flex justify-content-center min-vh-100">
    <div
      class="register relative d-flex justify-content-center"
      style="z-index: 1"
    >
      <div class="card border-0 w-100" style="border-radius: 24px">
        <div class="card-body px-5 py-6">
          <div>
            <div class="mb-5">
              <el-steps :active="step" finish-status="success">
                <el-step title="My Information"> </el-step>
                <el-step title="Credentials"></el-step>
                <el-step title="Payment Information"></el-step>
                <el-step title="Finalizing"></el-step>
              </el-steps>
            </div>

            <transition name="fade" mode="out-in">
              <template v-if="step === 0">
                <div>
                  <div class="mb-4">
                    <h3 class="fw-medium fs-2 mb-2">Well, hello there!</h3>
                    <p class="text-muted text-sm">
                      You want to register? let's do it!
                      <br />
                      <br />
                      First, give us some of your informations so we can know
                      you!
                    </p>
                  </div>

                  <PersonalInformation
                    @on-submit="onSubmit"
                    @cancel="$emit('close')"
                  />
                </div>
              </template>

              <template v-else-if="step === 1">
                <div>
                  <div class="mb-4">
                    <h3 class="fw-medium fs-2 mb-2">
                      You need to login right?
                    </h3>
                    <p class="text-muted text-sm">
                      Fill your desired username and password
                    </p>
                  </div>

                  <Credential @on-submit="onSubmit" @cancel="step -= 1" />
                </div>
              </template>

              <template v-else-if="step === 2">
                <div>
                  <div class="mb-4">
                    <h3 class="fw-medium fs-2 mb-2">
                      Let's talk about business
                    </h3>
                    <p class="text-muted text-sm">
                      Please fill your payment information
                    </p>
                  </div>

                  <PaymentInformation
                    @on-submit="onSubmit"
                    @cancel="step -= 1"
                  />
                </div>
              </template>

              <template v-else-if="step === 3">
                <div>
                  <div class="mb-4">
                    <h3 class="fw-medium fs-2 mb-2">Congratulations! 🎉</h3>
                    <p class="text-muted text-sm">
                      All your forms are validated, anything to change?
                    </p>
                  </div>

                  <Confirmation @on-submit="onSubmit" @cancel="step -= 1" />
                </div>
              </template>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useRouter } from "vue-router";
import PersonalInformation from "./steps/PersonalInfo.vue";
import Credential from "./steps/Credential.vue";
import PaymentInformation from "./steps/PaymentInfo.vue";
import Confirmation from "./steps/Confirmation.vue";

export default defineComponent({
  name: "register",
  components: {
    PersonalInformation,
    Credential,
    PaymentInformation,
    Confirmation,
  },
  setup(props, { emit }) {
    const app: any = inject("app");
    const $toast: any = inject("$toast");
    const store = useStore();
    const router = useRouter();
    const isLoading = ref(false);
    const step = ref(0);

    const onSubmit = async () => {
      if (step.value === 3) {
        try {
          await store.dispatch(Actions.SIGN_UP);

          $toast.success("User berhasil dibuat");
        } catch (e) {
          $toast.error(`Terjadi Kesalahan, ${e}`);
        } finally {
          emit("close");
        }
      } else {
        step.value = step.value + 1;
      }
    };

    return {
      isLoading,
      step,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .register {
    width: 75%;
  }
}
</style>
