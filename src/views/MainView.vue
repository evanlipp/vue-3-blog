<template>
  <div class="main">
    <div class="navigation">
      <h1 class="logo">blog,</h1>
      <router-link class="navigation__link" to="profile">My profile</router-link>
      <router-link class="navigation__link" to="posts">My posts</router-link>
      <MyButton class="navigation__link">New post</MyButton>
      <router-link class="navigation__link" to="auth" @click="logOut">Quit</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

const logOut = () => {
  signOut(auth)
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1400px;
  padding: 100px 200px 0 200px;
  height: 100%;
  display: flex;
  gap: 40px;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__link {
    font-size: 20px;
    color: inherit;
    text-align: left;
    letter-spacing: 2px;
    white-space: nowrap;
    border: none;
    background-color: transparent;
    transition: transform 100ms;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
}

.router-link-active {
  text-decoration: underline;
}

.content {
  background-color: $bg-secondary;
  width: 100%;
  border-radius: 7px;
  box-shadow: 0px 0px 53px -22px rgba(1, 11, 0, 0.22);
}

.logo {
  font: $font-logo;
}
</style>