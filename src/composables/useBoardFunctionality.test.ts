// import { describe, it, expect } from 'vitest'

// import { useBoardFunctionality } from './useBoardFunctionality'

// describe('useBoardFunctionality', () => {
//   const players = [
//     { name: 'Player 1', symbol: 'X', color: 'red' },
//     { name: 'Player 2', symbol: 'O', color: 'blue' }
//   ]
//   it('sets square value', () => {
//     const { squares, activePlayer, setSquareValue } = useBoardFunctionality(players)

//     setSquareValue(0)

//     expect(squares.value[0]).toEqual({
//       symbol: 'X',
//       color: 'red'
//     })
//     expect(activePlayer.value.name).toBe('Player 2')
//   })

//   it('checks for winner', () => {
//     const { squares, checkWin } = useBoardFunctionality(players)

//     // set up winning combination
//     squares.value = [
//       { symbol: 'X' },
//       { symbol: 'X' },
//       { symbol: 'X' },
//       null,
//       null,
//       null,
//       null,
//       null,
//       null
//     ]

//     const winner = checkWin()

//     expect(winner).toEqual([0, 1, 2])
//   })

//   it('changes status to tied', () => {
//     const players = [
//       { name: 'test123', symbol: '$', color: '#ffb703' },
//       { name: 'demojohn', symbol: '#', color: '#8ecae6' }
//     ]
//     const { squares, winningResult, gameStatus } = useBoardFunctionality(players)

//     // set up tie combination
//     squares.value = [
//       { symbol: '$' },
//       { symbol: '#' },
//       { symbol: '$' },
//       { symbol: '$' },
//       { symbol: '#' },
//       { symbol: '#' },
//       { symbol: '#' },
//       { symbol: '$' },
//       { symbol: '$' }
//     ]

//     winningResult.value = []

//     expect(gameStatus.value).toEqual('TIED')
//   })
// })
