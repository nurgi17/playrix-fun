import { computed } from 'vue'
import { useGameStore } from '../model/store/game.store'

export function useGameService() {
  const gameStore = useGameStore()

  const getGame = computed(() => {
    return gameStore.newGame
  })

  function setNewGame() {
    gameStore.setNewGame()
  }
  return {
    setNewGame,
    getGame
  }
}
