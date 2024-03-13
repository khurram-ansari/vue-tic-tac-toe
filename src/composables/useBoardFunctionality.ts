import type { Player } from '@/types'
import { computed, ref, type Ref } from 'vue'

export const useBoardFunctionality = (players: Player[]) => {
  const squares: Ref<any[]> = ref(Array(9).fill(null))

  const activePlayerIndex: Ref<number> = ref(0)

  const winningResult: Ref<number[]> = ref([])

  const activePlayer = computed(() => players[activePlayerIndex.value])

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
    activePlayerIndex.value = (activePlayerIndex.value + 1) % players.length
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
      return combination.every(
        (index) => squares.value[index]?.symbol === activePlayer.value.symbol
      )
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

  return {
    squares,
    activePlayer,
    gameStatus,
    winningStrikeClass,
    setSquareValue
  }
}
