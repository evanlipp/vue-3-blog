<template>
  <div class="form">
    <MyInput v-model="editedPost.title" type="text"></MyInput>
    <MyTextarea v-model="editedPost.body" type="text"></MyTextarea>
    <MyButton class="button button__primary" @click="saveEditedPost">Save</MyButton>
    <MyButton class="button button__primary" @click="emit('hideModal')">Cancel</MyButton>
  </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton';
import MyInput from '@/components/UI/MyInput';
import MyTextarea from '@/components/UI/MyTextarea';
import { ref } from 'vue';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, dataBase } from '@/firebase/init';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['hideModal']);

const editedPost = ref({
  title: props.post.title,
  body: props.post.body,
})

const saveEditedPost = async () => {
  await updateDoc(doc(dataBase, auth.currentUser.uid, `${props.post.id}`), editedPost.value)
  emit('hideModal')
} 
</script>

<style lang="scss" scoped>
.form {
  @extend %modal-form;
}
</style>