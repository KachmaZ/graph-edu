import { useUserStore } from '../store/userStore';
import { storeToRefs } from 'pinia';

export default function isAuthenticated() {
  const { isAuthenticated } = storeToRefs(useUserStore());

  if (!isAuthenticated.value) {
    return { name: 'Login' };
  }
  return true;
}
