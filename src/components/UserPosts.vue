<template>
  <div class="post-list">
    <div v-if="userPosts === undefined">
      <p>Loading posts...</p>
    </div>
    <div class="post-list_wrapper" v-else-if="userPosts.length > 0">
      <PostItem v-for="post in userPosts" :key="post.id" :post="post"/>
    </div>
    <div v-else>
      <p class="post-list_subtitle">Create your first post</p>
    </div>
  </div>
</template>

<script setup>
import { doc, onSnapshot } from 'firebase/firestore';
import { dataBase, auth } from '@/firebase';
import { ref } from 'vue';
import PostItem from '@/components/PostItem.vue';

const userPosts = ref();

onSnapshot(doc(dataBase, "users", auth.currentUser.uid), (doc) => {
  const data = Object.values(doc.data());
  userPosts.value = data;
})
</script>

<style lang="scss" scoped></style>
