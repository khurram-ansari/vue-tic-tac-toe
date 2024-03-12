<template>
  <button class="square" :style="{ color: color }">
    {{ symbol }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  symbol?: string
  color?: string
}>()
</script>

<style scoped>
.square {
  @apply text-xl border-black sm:text-6xl border-2 flex justify-center items-center;
}
</style>
