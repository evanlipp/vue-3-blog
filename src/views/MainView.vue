<template>
<div class="main">
  <h2>main page</h2>
    <router-link to="projects">projects</router-link>
    <router-link to="tasks">tasks</router-link>
    <router-link to="users">users</router-link>
    <h3>test blok</h3>
    <router-view></router-view>

   
  </div>
</template>

<script setup> 


</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
</style>