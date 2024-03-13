/** * Renders a Tic Tac Toe board with squares. * Allows clicking squares to set their value. *
Shows a strike indicator when game is won. * Emits events for turn done and game status changes. */
<template>
  <div class="board relative">
    <BoardSquare
      @click="setSquareValue(index)"
      :symbol="sq?.symbol"
      :color="sq?.color"
      v-for="(sq, index) in squares"
      :key="index"
    />
    <BoardStrike v-if="gameStatus === 'WIN'" :class="winningStrikeClass" />
  </div>
</template>

<script setup lang="ts">
import { useBoardFunctionality } from '@/composables/useBoardFunctionality'
import BoardSquare from './BoardSquare.vue'

import BoardStrike from './BoardStrike.vue'
import type { Player } from '@/types'
import { toRefs, watch, defineEmits } from 'vue'

const emit = defineEmits(['turnDone', 'statusChanged'])
const props = defineProps<{
  activePlayer: Player
}>()
const { activePlayer } = toRefs(props)

const { gameStatus, setSquareValue, squares, winningStrikeClass } =
  useBoardFunctionality(activePlayer)

watch(
  squares,
  () => {
    if (gameStatus.value === 'ONGOING') {
      emit('turnDone')
    }
  },
  { deep: true }
)

watch(gameStatus, (status) => emit('statusChanged', status), { immediate: true })
</script>

<style scoped>
.board {
  @apply grid border-8 border-black grid-cols-3 grid-rows-3 aspect-square w-[100%] max-w-[700px];
}
</style>
