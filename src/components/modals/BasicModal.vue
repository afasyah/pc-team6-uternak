<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    :id="props.id"
    ref="newTargetModalRef"
    tabindex="-1"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <!--begin::Modal dialog-->
    <div
      class="modal-dialog modal-dialog-centered mw-450px modal-dialog-scrollable"
    >
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-4 px-8 text-center">
          <img
            class="my-3"
            :src="props.img.src"
            :alt="props.img.alt"
            width="300"
          />

          <slot name="title"></slot>
        </div>
        <!--end::Modal body-->

        <div class="modal-footer justify-content-center">
          <!--begin::Actions-->
          <div class="text-center d-flex flex-column w-100">
            <slot name="actions" :submit="onSubmit" :cancel="onCancel">
              <button
                :data-kt-indicator="props.loading ? 'on' : null"
                data-bs-dismiss="modal"
                class="btn btn-lg btn-primary w-100 fs-5"
                type="button"
                @click="onSubmit"
              >
                <span v-if="!props.loading" class="indicator-label">
                  <slot name="submit">Submit</slot>
                </span>
                <span v-if="props.loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <button
                id="cancel_btn"
                type="reset"
                class="btn btn-lg btn-outline btn-outline-primary my-2 fs-5"
                data-bs-dismiss="modal"
                :data-bs-target="props.id"
                @click="onCancel"
              >
                Batal
              </button>
            </slot>
          </div>
          <!--end::Actions-->
        </div>
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Img {
  src: string;
  alt: string | null;
}

export default defineComponent({
  name: "basic-modal",
  props: {
    id: {
      type: String,
      default: "basic_modal",
    },
    img: {
      type: Object as PropType<Img>,
      default() {
        return {
          src: "",
          alt: null,
        };
      },
    },
  },
  setup(props: any, context) {
    const onSubmit = () => {
      context.emit("submit");
    };

    const onCancel = () => {
      context.emit("cancel");
      document.getElementById("cancel_btn")?.click();
    };

    return {
      props,
      onSubmit,
      onCancel,
    };
  },
});
</script>
