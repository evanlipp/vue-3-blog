<template>
  <div class="register-form">
    <MyInput v-model="name" type="text" :charactersMaxCount="50" placeholder="name" />
    <MyInput v-model="email" type="email" :charactersMaxCount="50" placeholder="email" />
    <MyInput v-model="password" type="password" :charactersMaxCount="50" placeholder="password" />
    <MyButton @click="register">Join now</MyButton>
    <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput'
import MyButton from '@/components/UI/MyButton'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase'

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref();

const register = async () => {
  if (name.value === '') {
    errorMessage.value = 'Enter your name';
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          alert('You have an account now!')
        })
        .then(() => {
          updateProfile(auth.currentUser, { displayName: `${name.value}` })
        })
        .then(() => {
          router.push({ path: '/' })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/missing-email':
              errorMessage.value = 'Enter email';
              break;
            case 'auth/invalid-email':
              errorMessage.value = 'Invalid email';
              break;
            case 'auth/weak-password':
              errorMessage.value = 'Password must be at least 6 characters';
              break;
            case 'auth/missing-password':
              errorMessage.value = 'Enter password';
              break;
            case 'auth/email-already-in-use':
              errorMessage.value = 'Email already in use';
              break;
          }
        })
    } catch {
      alert('something go wrong')
    }
  }
}
</script>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>