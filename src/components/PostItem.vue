<template>
  <div class="post-item" @click="$router.push(`/${post.id}`)">
    <div class="post-item__header">
      <h3 class="post-item__title">{{ post.title }}</h3>
      <SvgIcon :iconName="'#close'" @click.stop="deletePost" />
    </div>
    <p class="post-item__body">{{ post.body }}</p>
    <div class="post-item__footer">
      <p class="post-item__comments-count">Количeство комментариев: {{ post.comments.length }}</p>
      <p class="post-item__date">{{ post.creationDate }}</p>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/UI/SvgIcon';
import { auth, dataBase } from '@/firebase/init';
import { doc, deleteDoc } from 'firebase/firestore';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
});

const deletePost = async () => {
  await deleteDoc(doc(dataBase, auth.currentUser.uid, `${props.post.id}`))
};
</script>

<style lang="scss" scoped>
.post-item {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid $border-primary;
  border-radius: 7px;
  background-color: $bg-item-light;
  transition: transform 100ms;

  &:hover {
    transform: scale(101%);
    background-color: $bg-secondary-hover;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 520px) {
      font-size: 14px;
    }
  }

  &__body {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 520px) {
      font-size: 10px;
    }
  }

  &__footer {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 520px) {
      font-size: 6px;
    }
  }

  &__date {
    color: $font-color-light;
    white-space: nowrap;
  }
}
</style>