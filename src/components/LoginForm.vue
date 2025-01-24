<template>
  <div class="login">
    <label>E-mail <input v-model="email" type="email" /></label>
    <label>Пароль <input v-model="password" type="password" placeholder="*******" /></label>
    <button @click="handleSubmit">Войти</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/userStore';
import router from '../router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const { login } = useUserStore();

const handleSubmit = () => {
  const isSuccessful = login(email.value, password.value);
  if (isSuccessful) {
    router.push({ name: 'Main' });
  } else {
    errorMessage.value = 'Неверный логин или пароль';
  }
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 40px 20px;
  border: 1px solid white;
  border-radius: 30px;

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
