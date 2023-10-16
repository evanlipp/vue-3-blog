<template>
  <div class="form">
    <MyInput v-model="post.title" type="text" placeholder="Post title" :charactersMaxCount="80"></MyInput>
    <MyTextarea v-model="post.body" type="text" placeholder="Post body"></MyTextarea>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    <MyButton class="button button__primary" @click="createPost">Publish</MyButton>
    <MyButton class="button button__primary" @click="hideModal">Cancel</MyButton>
  </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput';
import MyButton from '@/components/UI/MyButton';
import MyTextarea from '@/components/UI/MyTextarea';
import { ref } from 'vue';
import { auth, dataBase } from '@/firebase/init';
import { setDoc, doc } from 'firebase/firestore';
import { isStringEmpty } from '@/helpers/stringChecker';

const errorMessage = ref();

const emit = defineEmits(['hideModal']);

const hideModal = () => {
  emit('hideModal')
};

const post = ref({
  title: '',
  body: ''
});

const createPost = async () => {
  if (isStringEmpty(post.value.title)) {
    errorMessage.value = 'Enter post title';
    return
  } else if (isStringEmpty(post.value.body)) {
    errorMessage.value = 'Enter post body';
    return
  } else {
    const currentDate = Date.now();
    const creationDate = new Date(currentDate).toLocaleDateString('ru-RU', { hour: "numeric", minute: "numeric" });

    const newPost = {
      id: currentDate,
      title: post.value.title,
      body: post.value.body,
      creationDate: creationDate,
      authorEmail: auth.currentUser.email,
      comments: [],
    };

    await setDoc(doc(dataBase, auth.currentUser.uid, `${currentDate}`), newPost)
  }
  emit('hideModal')
}
</script>

<style lang="scss" scoped>
.form {
  @extend %modal-form;
}
</style>