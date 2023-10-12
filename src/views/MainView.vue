<template>
  <div class="main">
    <div class="navigation">
      <h1 class="logo">blog,</h1>
      <router-link class="navigation__link" to="profile">My profile</router-link>
      <router-link class="navigation__link" to="posts">My posts</router-link>
      <MyButton class="button navigation__link" @click="isModalVisible = !isModalVisible">New post</MyButton>
      <router-link class="navigation__link" to="auth" @click="logOut">Quit</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
  <MyModal :visibility="isModalVisible" @hideModal="isModalVisible = !isModalVisible">
    <NewPostForm @hideModal="isModalVisible = !isModalVisible" />
  </MyModal>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton';
import MyModal from '@/components/UI/MyModal';
import NewPostForm from '@/components/NewPostForm';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/init';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isModalVisible = ref(false);

const logOut = () => {
  signOut(auth)
};
</script>

<style lang="scss" scoped>
.main {
  @extend %container;
  height: 100vh;
  display: flex;
  gap: 60px;

  @media (max-width: 520px) {
    gap: 10px;
  }
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 520px) {
    gap: 15px;
  }

  &__link {
    font-size: 20px;
    text-align: left;
    letter-spacing: 2px;
    white-space: nowrap;
    transition: transform 100ms;

    @media (max-width: 520px) {
      font-size: 12px;
    }

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
  height: fit-content;
  max-height: 100%;
  min-height: 230px;
  width: 100%;
  padding: 10px;
  overflow: scroll;
  border-radius: 7px;
  box-shadow: 0px 0px 53px -22px rgba(1, 11, 0, 0.22);
  background-color: $bg-secondary;
}

.logo {
  font: $font-logo;

  @media (max-width: 520px) {
    font-size: 20px;
  }
}
</style>