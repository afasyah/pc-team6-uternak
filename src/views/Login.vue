<template>
  <div id="login">
    <div
      class="d-flex w-100 h-100 justify-content-center align-items-center min-vh-100 p-4"
    >
      <div class="bg-white rounded p-4 shadow w-100" style="max-width: 640px">
        <h2 class="fw-bold fs-2 mb-3">Login</h2>
        <p class="text-gray-light">
          Doesn't have an account?
          <router-link to="/register">Click here</router-link>
        </p>

        <el-form
          :model="credential"
          ref="loginForm"
          class="form mb-4"
          :rules="loginFormRules"
          @submit.prevent="login"
        >
          <el-form-item prop="username" class="mb-3" required>
            <label class="fw-bold mb-1">Username</label>
            <el-input
              v-model="credential.username"
              placeholder="Username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="mb-3" required>
            <label class="fw-bold mb-1">Password</label>
            <el-input
              v-model="credential.password"
              type="password"
              placeholder="Password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="d-flex justify-content-end w-100">
              <button class="btn btn-primary px-6 py-2 mt-3">Login</button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Authentication as loginFormRules } from "@/core/helpers/validation";

export default defineComponent({
  name: "login",
  setup() {
    const credential = ref({
      username: "",
      password: "",
    });
    const loginForm: any = ref("");

    const login = () => {
      //
    };

    return {
      credential,
      loginForm,
      loginFormRules,
      login,
    };
  },
});
</script>
