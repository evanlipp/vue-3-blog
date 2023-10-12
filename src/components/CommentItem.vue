<template>
  <div class="comment">
    <div class="comment__header">
      <div>
        <p>{{ comment.authorEmail }} | {{ comment.authorName }}</p>
        <p class="comment__date">{{ comment.creationDate }}</p>
      </div>
      <SvgIcon :iconName="'#close'" @click="deleteComment" />
    </div>
    <hr>
    <p class="comment__body">{{ comment.body }}</p>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/UI/SvgIcon';
import { auth, dataBase } from '@/firebase/init';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  comment: {
    type: Object,
  }
})

const deleteComment = async () => {
  await updateDoc(doc(dataBase, auth.currentUser.uid, route.params.id), {
    comments: arrayRemove(props.comment)
  })
}
</script>

<style lang="scss" scoped>
.comment {
  padding: 4px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid $border-primary;
  border-radius: 7px;
  background-color: $bg-item-light;

  &__header {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    font-size: 12px;
    text-align: justify;
  }
}
</style>