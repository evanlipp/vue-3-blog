<template>
  <div class="form">
    <MyInput v-model="post.title" type="text" placeholder="Post title"></MyInput>
    <MyTextarea v-model="post.body" type="text" placeholder="Post body"></MyTextarea>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    <MyButton class="button" @click="createPost">Publish</MyButton>
    <MyButton class="button" @click="hideModal">Cancel</MyButton>
  </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput';
import MyButton from '@/components/UI/MyButton';
import MyTextarea from '@/components/UI/MyTextarea';
import { ref } from 'vue';
import { auth, dataBase } from '@/firebase';
import { setDoc, doc } from 'firebase/firestore';

const errorMessage = ref()

const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
}

const post = ref({
  title: 'j',
  body: 'k'
})

const createPost = async () => {
  if (post.value.title === '' || post.value.title.trim() === '') {
    errorMessage.value = 'Enter post title';
  } else if (post.value.body === '' || post.value.body.trim() === '') {
    errorMessage.value = 'Enter post body';
  } else {
    const currentDate = Date.now()
    const date = new Date(currentDate)
    const creationDate = date.toLocaleDateString('ru-RU', { hour: "numeric", minute: "numeric" })

    const newPost = {}
    newPost[currentDate] = {
      id: currentDate,
      title: post.value.title,
      body: post.value.body,
      creationDate: creationDate,
      author: auth.currentUser.email
    }

    await setDoc(doc(dataBase, "users", auth.currentUser.uid), newPost, {merge: true});
  }
}

</script>

<style lang="scss" scoped>
.form {}
</style>