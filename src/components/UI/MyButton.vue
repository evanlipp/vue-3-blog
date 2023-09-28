<template>
  <button @click="click" class="button">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const click = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 7px;
  background-color: $bg-secondary;

  &:hover {
    background-color: $bg-button-hover;
  }

  &:active {
    background-color: $bg-button-active;
  }
}
</style>