import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from '../types';
import users from '@/data/users.json';
import router from '../router';

export const useUserStore = defineStore('users', () => {
  const user = ref<User | null>(null);

  const isAuthenticated = computed(() => user.value !== null);

  const login = (email: string, password: string) => {
    const loginUser = users.find((user: User) => user.email === email);
    if (loginUser.password === password) {
      localStorage.setItem('graph_edu_email', email);
      localStorage.setItem('graph_edu_password', password);
      user.value = { ...loginUser };
      return true;
    }
    return false;
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem('graph_edu_email');
    localStorage.removeItem('graph_edu_password');
    router.push({ name: 'Login' });
  };

  const getShortName = computed(() => {
    if (user.value) {
      return `${user.value?.surname} ${user.value?.name[0]}.${user.value?.patronimic[0]}.`;
    }
  });

  const getFullName = computed(() => {
    if (user.value) {
      return `${user.value?.surname} ${user.value?.name} ${user.value?.patronimic}`;
    }
  });

  return {
    user,
    isAuthenticated,

    getShortName,
    getFullName,

    login,
    logout,
  };
});
