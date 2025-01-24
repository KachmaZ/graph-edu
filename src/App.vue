<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppLayout from './layouts/AppLayout.vue';
import { useUserStore } from './store/userStore';
import router from './router';

onMounted(() => {
  const { login } = useUserStore();
  const authedUserEmail = localStorage.getItem('graph_edu_email');
  if (authedUserEmail) {
    const authedUserPassword = localStorage.getItem('graph_edu_password') ?? '';
    login(authedUserEmail, authedUserPassword);
    router.push({ name: 'Main' });
  }
});
</script>
