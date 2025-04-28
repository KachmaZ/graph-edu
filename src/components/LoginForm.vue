<template>
  <div class="login">
    <h2>Вход в профиль</h2>
    <div class="login__form">
      <div class="text-label">Электронная почта</div>
      <UIInput title="E-mail" v-model="email" type="email" placeholder="E-mail" id="login-mail" />
      <div class="text-label">Пароль</div>
      <UIInput
        title="Пароль"
        v-model="password"
        type="password"
        placeholder="Password"
        id="login-password"
      />
    </div>
    <div class="login__error">
      {{ errorMessage }}
    </div>
    <UIButton variant="primary" @click="handleSubmit">Войти</UIButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/userStore';
import router from '../router';
import UIButton from '@/components/UIkit/UIButton.vue';
import UIInput from '@/components/UIkit/UIInput.vue';

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
  gap: 45px;

  padding: 100px;
  background-color: $bg-transparency;
  border-radius: 30px;

  &__form {
    .text-label {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 30px;
    }
  }

  &__error {
    color: $status-negative;
  }

  @include respond-to(sm) {
    width: 100%;
    height: 100%;
    padding: 20px;

    border-radius: 0;
  }
}
</style>
