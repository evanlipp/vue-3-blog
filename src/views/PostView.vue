<template >
  <div class="post">
    <div class="post__plug" v-if="post === undefined">Loading...</div>
    <div class="post__body" v-else>
      <div class="post__content">
        <h1 class="post__content-title"> {{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
      <MyButton class="button button__primary button__primary_wide" @click="isModalVisible = !isModalVisible">Edit
      </MyButton>
      <div>
        <MyTextarea v-model="comment.body" placeholder="Enter your comment here" :charactersMaxCount="1000"></MyTextarea>
        <MyButton class="button button__primary button__primary_wide" @click="saveComment">Save comment</MyButton>
      </div>
      <div class="post__comments" v-if="comments.length > 0">
        <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"></CommentItem>
      </div>
    </div>
  </div>
  <MyModal :visibility="isModalVisible" @hideModal="isModalVisible = !isModalVisible">
    <PostEditForm :post="post" @hideModal="isModalVisible = !isModalVisible" />
  </MyModal>
</template>

<script setup>
import CommentItem from '@/components/CommentItem';
import MyButton from '@/components/UI/MyButton';
import PostEditForm from '@/components/PostEditForm'
import MyModal from "@/components/UI/MyModal";
import MyTextarea from "@/components/UI/MyTextarea";
import { auth, dataBase } from "@/firebase/init";
import { arrayUnion, doc, onSnapshot, updateDoc, } from "firebase/firestore";
import { onBeforeUnmount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isModalVisible = ref(false);

const comment = ref({
  body: '',
});

const saveComment = async () => {
  const currentDate = Date.now()
  const creationDate = new Date(currentDate).toLocaleDateString('ru-RU', { hour: "numeric", minute: "numeric" })

  const newComment = {
    id: currentDate,
    authorName: auth.currentUser.displayName,
    authorEmail: auth.currentUser.email,
    creationDate: creationDate,
    body: comment.value.body,
  }

  await updateDoc(doc(dataBase, auth.currentUser.uid, route.params.id), {
    comments: arrayUnion(newComment),
  })
  comment.value.body = '';
}

const comments = ref([]);

const post = ref();
const postChangeListener = onSnapshot(doc(dataBase, auth.currentUser.uid, route.params.id), (doc) => {
  post.value = doc.data();
  comments.value = doc.data().comments
})

onBeforeUnmount(() => postChangeListener())
</script>

<style lang="scss" scoped>
.post {
  @extend %container;
  min-height: 100vh;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: justify;

    &-title {
      text-align: center;
    }
  }

  &__comments {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
}
</style>