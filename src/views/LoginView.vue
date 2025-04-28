<template>
  <div class="login-wrapper">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped lang="scss">
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  @include respond-to(sm) {
    width: 100%;
    height: 100%;
    transform: none;

    position: static;
  }
}
</style>
