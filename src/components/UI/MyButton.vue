<template>
  <button class="" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);

const click = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.button {
  font: inherit;
  color: inherit;
  border: none;
  background-color: transparent;

  &__primary {
    padding: 10px 15px;
    border: 1px solid $border-primary;
    border-radius: 7px;
    background-color: $bg-secondary;

    &_wide {
      width: 100%;
    }

    &:hover {
      background-color: $bg-button-hover;
    }

    &:active {
      background-color: $bg-button-active;
    }
  }
}
</style>
