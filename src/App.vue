<template>
  <p class="time" v-if="time">{{ time }}</p>
  <router-view />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const time = computed(() => store.getters.getCurrentTime);

onMounted(() => {
  store.dispatch('fetchCurrentTime')
})

setInterval(() => {
  store.dispatch('fetchCurrentTime')
}, 60000);
</script>

<style lang="scss">
.time {
  font: $font-logo;
  position: absolute;
  opacity: 0.2;
}
</style>
