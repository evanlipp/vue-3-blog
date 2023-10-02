<template>
  <div class="login-form">
    <MyInput v-model="email" type="email" :charactersMaxCount="50" placeholder="email" />
    <MyInput v-model="password" type="password" :charactersMaxCount="50" placeholder="password" />
    <div class="login-form__buttons">
      <MyButton class="button login-form__button" @click="logIn">Login</MyButton>
      <MyButton class="button login-form__button" @click="$router.push({ path: '/register' })">Register</MyButton>
    </div>
    <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton'
import MyInput from '@/components/UI/MyInput'
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'vue-router'

const router = useRouter();
const email = ref('van@mail.ru');
const password = ref('12345678909876');
const errorMessage = ref();

const logIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert('Sucsess login!!!')
      })
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage.value = 'Invalid email';
            break;
          case 'auth/wrong-password':
            errorMessage.value = 'Wrong password';
            break;
          case 'auth/missing-password':
            errorMessage.value = 'Enter password';
            break;
          case 'auth/user-not-found':
            errorMessage.value = 'User not found';
            break;
          case 'auth/user-disabled':
            errorMessage.value = 'User disabled';
            break;
        }
      })
  } catch {
    alert('something go wrong')
  }

}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__buttons {
    display: flex;
    gap: 30px;
  }

  &__button {
    width: 100%;
  }
}
</style>