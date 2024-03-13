<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'
import type { Player } from '@/types'
import { computed, ref, type Ref } from 'vue'

const squares: Ref<any[]> = ref(Array(9).fill(null))

const players: Ref<Player[]> = ref([
  { name: 'Khurram', symbol: 'X', color: '#e70767' },
  { name: 'Fatima', symbol: 'O', color: '#0000ff' }
])

const activePlayerIndex: Ref<number> = ref(0)

const winningResult: Ref<number[]> = ref([])

const activePlayer = computed(() => players.value[activePlayerIndex.value])

const gameStatus = computed(() => {
  const allMovesDone = squares.value.every((square) => square?.symbol)

  if (winningResult.value.length) return 'WIN'

  if (allMovesDone && !winningResult.value.length) return 'TIED'

  return 'ONGOING'
})

const winningStrikeClass = computed(() => {
  const prefix = 'dir-'
  const dir = winningResult.value?.join('')
  return dir ? `${prefix}${dir}` : ''
})

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

  return winningCombination
}

const setSquareValue = (index: number) => {
  if (!squares.value[index] && gameStatus.value === 'ONGOING') {
    squares.value[index] = { symbol: activePlayer.value.symbol, color: activePlayer.value.color }

    const result = checkWin()
    if (result) {
      winningResult.value = result
    } else changeTurn()
  }
}
</script>

<template>
  <main>
    <section class="min-h-screen flex flex-col items-center justify-center px-10">
      <h1 class="text-4xl mb-4">
        <template v-if="gameStatus === 'ONGOING'"> Current Player: </template>

        <template v-else-if="gameStatus === 'WIN'"> Winner 🎉: </template>

        <template v-else> Game is Tied </template>

        <span v-if="gameStatus !== 'TIED'" :style="{ color: activePlayer?.color }"
          >{{ activePlayer?.name }}({{ activePlayer?.symbol }})</span
        >
      </h1>
      <div class="board relative">
        <BoardSquare
          @click="setSquareValue(index)"
          :symbol="sq?.symbol"
          :color="sq?.color"
          v-for="(sq, index) in squares"
          :key="index"
        />
        <div
          v-if="gameStatus === 'WIN'"
          class="strike h-full w-1 absolute bg-green-500"
          :class="[winningStrikeClass]"
        ></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.board {
  @apply grid border-8 border-black grid-cols-3 grid-rows-3 aspect-square w-[100%] max-w-[700px];
}

.strike.dir-036,
.strike.dir-147,
.strike.dir-258 {
  transform: translateX(-50%);
}
.strike.dir-036 {
  top: 0;
  left: calc(1 / 6 * 100%);
}
.strike.dir-147 {
  top: 0;
  left: calc(3 / 6 * 100%);
}
.strike.dir-258 {
  top: 0;
  left: calc(5 / 6 * 100%);
}
.strike.dir-012,
.strike.dir-345,
.strike.dir-678 {
  left: 50%;
  transform: rotate(90deg) translate(50%, -50%);
  transform-origin: top;
}
.strike.dir-012 {
  top: calc(1 / 6 * 100%);
}
.strike.dir-345 {
  top: calc(3 / 6 * 100%);
}
.strike.dir-678 {
  top: calc(5 / 6 * 100%);
}

.strike.dir-048,
.strike.dir-246 {
  left: 50%;
}
.strike.dir-048 {
  transform: rotate(-45deg) scaleY(1.3);
}
.strike.dir-246 {
  transform: rotate(45deg) scaleY(1.3);
}
</style>
