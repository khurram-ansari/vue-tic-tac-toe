<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'
import type { Player } from '@/types'
import { computed, ref, type Ref } from 'vue'

const squares: Ref<any[]> = ref(Array(9).fill(null))

const players: Ref<Player[]> = ref([
  { name: 'Khurram', symbol: 'X', color: '#e70767' },
  { name: 'John', symbol: 'O', color: '#0000ff' }
])

const activePlayerIndex: Ref<number> = ref(0)
const isGameOver: Ref<boolean> = ref(false)

const activePlayer = computed(() => players.value[activePlayerIndex.value])

const changeTurn = () => {
  activePlayerIndex.value = (activePlayerIndex.value + 1) % players.value.length
}
const checkWin = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const winningCombination = winningCombinations.find((combination) => {
    return combination.every((index) => squares.value[index]?.symbol === activePlayer.value.symbol)
  })

  return !!winningCombination
}

const setSquareValue = (index: number) => {
  if (!squares.value[index] && isGameOver.value === false) {
    squares.value[index] = { symbol: activePlayer.value.symbol, color: activePlayer.value.color }

    if (checkWin()) isGameOver.value = true
    else changeTurn()
  }
}
</script>

<template>
  <main>
    <section class="min-h-screen flex flex-col items-center justify-center px-10">
      <h1 class="text-4xl mb-4">
        Player turn : <span :style="{ color: activePlayer?.color }">{{ activePlayer?.name }}</span>
      </h1>
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
