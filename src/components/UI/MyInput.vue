<template>
  <input class="input" :value="modelValue" @input="updateInput" :maxlength="charactersMaxCount">
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
.input {
  font: inherit;
  color: inherit;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 7px;
}
</style>