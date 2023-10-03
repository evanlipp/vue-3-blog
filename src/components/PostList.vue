<template>
  <div class="post-list">
    <div v-if="posts === undefined">
      <p>Loading posts...</p>
    </div>
    <div class="post-list_wrapper" v-else-if="posts.length > 0">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <h3 class="post-list_subtitle">Create your first post</h3>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue';

const props = defineProps({
  posts: Array,
})
</script>