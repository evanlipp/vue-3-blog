<template>
  <div>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" @click="click">
      <use :xlink:href='iconName' />
    </svg>
  </div>
</template>

<script setup>
import "@/assets/icons/close.svg";

const props = defineProps({
  iconName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click']);

const click = (event) => {
  emit('click', event)
};
</script>

<style  lang="scss">
.icon {
  width: 16px;
  height: 16px;
  color: rgb(75, 75, 75);

  &:hover {
    color: red;
    transform: rotate(180deg);
    transition: 0.5s;
  }
}
</style>