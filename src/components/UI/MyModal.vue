<template>
  <div class="modal" v-if="visibility" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visibility: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);

  &__content {
    margin: auto;
    padding: 20px;
    background: $bg-secondary;
    border-radius: 7px;
    min-height: 50px;
    min-width: 300px;
  }
}

</style>
