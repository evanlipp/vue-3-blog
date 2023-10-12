<template>
  <div class="profile">
    <div v-if="auth.currentUser">
      <p>Your name: {{ auth.currentUser.displayName }}</p>
      <p>Your Email: {{ auth.currentUser.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { auth } from '@/firebase/init';
</script>

<style lang="scss" scoped>
.profile {
  @media (max-width: 520px) {
    font-size: 14px;
  }
}
</style>