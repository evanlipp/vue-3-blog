<template>
  
    <!-- <button @click="get">get user</button>
    <button @click="logout">logout</button> -->
    <RouterView></RouterView>

</template>

<script setup>
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'vue-router'



const get = () => {
  if (auth.currentUser) {
  
    console.log(`user name = ${auth.currentUser.displayName}`)
    console.log(`user id = ${auth.currentUser.uid}`)
  } else {
    console.log(`logged user = false`)
  }

}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
