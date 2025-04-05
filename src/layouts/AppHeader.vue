<template>
  <header class="app-header">
    <RouterLink :to="{ name: 'Main' }" class="app-header__logo">
      <img :src="logoPath" alt="GRAPH-EDU" />
    </RouterLink>
    <div class="app-header__nav">
      <AppNav :routes="headerRoutes" />
    </div>

    <div class="app-header__user">
      <template v-if="user">
        <RouterLink :to="{ name: 'Profile' }" style="text-decoration: none">
          <UIRoundButton>{{ getFirstLetters }}</UIRoundButton>
        </RouterLink>

        <UIButton class="user-logout" variant="primary" @click="logout">Выйти</UIButton>
      </template>
      <button v-else class="user-login" @click="goToLogin">Войти</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/userStore';
import { RouterLink } from 'vue-router';
import router from '../router';
import AppNav from '../components/AppNav.vue';
import { ref } from 'vue';
import logoPath from '@/assets/images/logo.png';
import UIButton from '../components/UIkit/UIButton.vue';
import UIRoundButton from '../components/UIkit/UIRoundButton.vue';

const userStore = useUserStore();
const { user, getFirstLetters } = storeToRefs(userStore);
const { logout } = userStore;

const headerRoutes = ref([
  {
    title: 'Все курсы',
    to: { name: 'Main' },
    isAvailable: true,
  },
  {
    title: 'Мои курсы',
    to: {
      name: 'StudentCourseGrid',
    },
    isAvailable: !!user.value,
  },
  {
    title: 'UIkit',
    to: { name: 'UIkit' },
    isAvailable: true,
  },
]);

const goToLogin = () => {
  router.push({ name: 'Login' });
};
</script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: $header_height;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: $bg-black;

  &__logo {
    text-decoration: none;
    color: white;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 20px;

    .user-avatar {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
