<script setup lang="ts">
import BoardHeader from '../components/BoardHeader.vue'
import BaseBoard from '@/components/BaseBoard.vue'
import type { Player } from '@/types'
import { computed, ref, type Ref } from 'vue'

const players: Ref<Player[]> = ref([
  { name: 'Khurram', symbol: 'X', color: '#e70767' },
  { name: 'John', symbol: '#', color: '#0000ff' }
])

const gameStatus: Ref<string> = ref('')

const activePlayerIndex: Ref<number> = ref(0)
const activePlayer = computed(() => players.value[activePlayerIndex.value])

const changeTurn = () => {
  activePlayerIndex.value = (activePlayerIndex.value + 1) % players.value.length
}

const handleStatusChanged = (status: string) => {
  gameStatus.value = status
}
</script>

<template>
  <main>
    <section class="min-h-screen flex flex-col items-center justify-center px-10">
      <BoardHeader v-bind:active-player v-bind:game-status />

      <BaseBoard
        @status-changed="handleStatusChanged"
        @turnDone="changeTurn"
        v-bind:active-player
      />
    </section>
  </main>
</template>

<style scoped></style>
