import { useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import { computed } from 'vue'
import { IResultType } from '../model/DTO/game.dto'
export function useQuestionInService() {
  const router = useRouter(),
    gameStore = useGameStore()

  const getQuestion = computed(() => {
    return gameStore.currentCategory?.questions
  })

  const getCategory = computed(() => {
    return gameStore.currentCategory
  })

  function done() {
    gameStore.setGamePoints()
    router.push({
      name: 'result',
      params: { type: IResultType.Correct }
    })
  }

  return {
    getQuestion,
    getCategory,
    done
  }
}
