<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'
import type { Player } from '@/types'
import { computed, ref, type Ref } from 'vue'

const squares: Ref<any[]> = ref(Array(9).fill(null))

const players: Ref<Player[]> = ref([
  { name: 'Khurram', symbol: 'X', color: '#e70767' },
  { name: 'John', symbol: 'O', color: '#66b30a' }
])

const activePlayerIndex: Ref<number> = ref(0)

const activePlayer = computed(() => players.value[activePlayerIndex.value])

const changeTurn = () => {
  activePlayerIndex.value = (activePlayerIndex.value + 1) % players.value.length
}

const setSquareValue = (index: number) => {
  if (squares.value[index]) return

  squares.value[index] = { symbol: activePlayer.value.symbol, color: activePlayer.value.color }
  changeTurn()
}
</script>

<template>
  <main>
    <section class="min-h-screen flex items-center justify-center px-10">
      <div class="board">
        <BoardSquare
          @click="setSquareValue(index)"
          :symbol="sq?.symbol"
          :color="sq?.color"
          v-for="(sq, index) in squares"
          :key="index"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.board {
  @apply grid border-8 border-black grid-cols-3 grid-rows-3 aspect-square w-[100%] max-w-[700px];
}
</style>
