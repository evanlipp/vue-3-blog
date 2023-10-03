<template>
  <div class="main">
    <div class="navigation">
      <button @click="add">add</button>
      <button @click="get">get</button>
      <h1 class="logo">blog,</h1>
      <router-link class="navigation__link" to="profile">My profile</router-link>
      <router-link class="navigation__link" to="posts" >My posts</router-link>
      <MyButton class="navigation__link" @click="isVisible = !isVisible">New post</MyButton>
      <router-link class="navigation__link" to="auth" @click="logOut">Quit</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <MyModal :visibility="isVisible" @hideModal="isVisible = !isVisible">
    <NewPostForm @hideModal="isVisible = !isVisible"/>
  </MyModal>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton';
import MyModal from '@/components/UI/MyModal';
import NewPostForm from '@/components/NewPostForm';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { ref } from 'vue';

const isVisible = ref(false)

const logOut = () => {
  signOut(auth)
}

import { dataBase } from '@/firebase';
import { collection, addDoc, doc, setDoc, updateDoc, serverTimestamp, getDoc, getDocs, onSnapshot } from "firebase/firestore"; 



const get = async () => {
  const docref = await getDoc(doc(dataBase, "users", auth.currentUser.uid))
  const res = docref.data()
  console.log(Object.values(res))
}



const add = async () => {
  await setDoc(doc(dataBase, 'users', auth.currentUser.uid ), {first: {title: 'bh', desc: 'bhb'}, second: {title: 'bbhbh', desc: 'bhoob'}})
  
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