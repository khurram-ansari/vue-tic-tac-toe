<template>
  <div class="square">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value?: string
}>()
</script>

<style scoped>
.square {
  @apply text-xl border-black sm:text-6xl border-2 flex justify-center items-center;
}
</style>
