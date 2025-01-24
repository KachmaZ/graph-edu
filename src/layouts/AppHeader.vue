<template>
  <header class="app-header">
    <RouterLink :to="{ name: 'Main' }" class="app-header__logo">GRAPH-EDU</RouterLink>
    <div class="app-header__nav">
      <AppNav :routes="headerRoutes" />
    </div>

    <div class="app-header__user">
      <template v-if="user">
        <RouterLink :to="{ name: 'Profile' }"
          ><img class="user-avatar" :src="dummyAvatar" alt=""
        /></RouterLink>

        <span class="user-name">{{ getShortName }}</span>
        <button class="user-logout" @click="logout">Выйти</button>
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
import dummyAvatar from '@/assets/images/dummyAvatar.png';

const userStore = useUserStore();
const { user, getShortName } = storeToRefs(userStore);
const { logout } = userStore;

const headerRoutes = ref([
  {
    title: 'Все курсы',
    route: { name: 'Main' },
    isAvailable: true,
  },
  {
    title: 'Мои курсы',
    route: {
      name: 'StudentCourseGrid',
    },
    isAvailable: !!user.value,
  },
]);

const goToLogin = () => {
  router.push({ name: 'Login' });
};
</script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #718b8d;
  position: fixed;
  top: 0;
  left: 0;

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
