<template>
  <div class="post-list">
    <div class="post-list__title-wrapper" v-if="userPosts === undefined">
      <p class="post-list__title">Loading posts...</p>
    </div>
    <div class="post-list__wrapper" v-else-if="userPosts.length > 0">
      <TransitionGroup name="post-list">
        <PostItem v-for="post in userPosts" :key="post.id" :post="post" />
      </TransitionGroup>
    </div>
    <div class="post-list__title-wrapper" v-else>
      <p class="post-list__title">Create your first post</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/PostItem.vue';
import { auth, dataBase } from '@/firebase/init';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

const userPosts = ref();

const fetchOptions = query(collection(dataBase, auth.currentUser.uid), orderBy('id'));
onSnapshot(fetchOptions, (querySnapshot) => {
  let fetchedPosts = [];
  querySnapshot.forEach((doc) => {
    fetchedPosts.push(doc.data())
  })
  userPosts.value = fetchedPosts.reverse();
})
</script>

<style lang="scss" scoped>
.post-list {
  height: 100%;

  &__title-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 20px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>
