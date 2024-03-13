<template>
  <div class="text-4xl mb-4">
    <template v-if="gameStatus === 'ONGOING'"> Current Player: </template>

    <template v-else-if="gameStatus === 'WIN'"> Winner 🎉: </template>

    <template v-else> Game is Tied </template>

    <span v-if="gameStatus !== 'TIED'" :style="{ color: activePlayer?.color }"
      >{{ activePlayer?.name }}({{ activePlayer?.symbol }})</span
    >
  </div>
</template>

<script setup lang="ts">
import type { Player } from '@/types'

defineProps<{
  gameStatus: string
  activePlayer: Player
}>()
</script>

<style scoped></style>
