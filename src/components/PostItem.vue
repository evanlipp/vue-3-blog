<template>
  <h3 class="post-item_title">{{ post.title }}</h3>
      <p class="post-item_description">{{ post.desc }}</p>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  post: Object,
})
</script>