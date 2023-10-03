<template>
  <textarea class="textarea" :value="modelValue" @input="updateInput" :maxlength="charactersMaxCount"></textarea>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  charactersMaxCount: Number,
})

const emit = defineEmits(['update:modelValue'])

const updateInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  height: 140px;
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 7px;
  resize: none;
}
</style>