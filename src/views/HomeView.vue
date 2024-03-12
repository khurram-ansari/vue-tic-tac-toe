<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'
</script>

<template>
  <main>
    <section class="min-h-screen flex items-center justify-center px-10">
      <div class="board">
        <BoardSquare v-for="sq in 9" :key="sq" />
      </div>
    </section>
  </main>
</template>
<style scoped>
.board {
  @apply grid border-8 border-black grid-cols-3 grid-rows-3 aspect-square w-[100%] max-w-[700px];
}
</style>
