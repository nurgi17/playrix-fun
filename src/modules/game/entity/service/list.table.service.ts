import { useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import type { ICategory } from '../model/DTO/game.dto'

export function useListTableService() {
  const router = useRouter(),
    gameStore = useGameStore()

  function goToQuestion(category: ICategory) {
    gameStore.setCurrentCategory(category)
    router.push({
      name: 'question',
      params: { categoryId: category.id }
    })
  }
  return {
    goToQuestion
  }
}
