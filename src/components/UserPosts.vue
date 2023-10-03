<template>
  <div>
    <PostList :posts="userPosts" />
  </div>
</template>

<script setup>
import PostList from '@/components/PostList';
import { doc, onSnapshot } from 'firebase/firestore';
import { dataBase, auth } from '@/firebase';
import { ref } from 'vue';


const userPosts = ref()

onSnapshot(doc(dataBase, "users", auth.currentUser.uid), (doc) => {
  const data = Object.values(doc.data());
  userPosts.value = data
})







</script>



<style lang="scss"></style>