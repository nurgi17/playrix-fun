import { useRoute, useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import { computed } from 'vue'
import { IResultType } from '../model/DTO/game.dto'

export function useResultService() {
  const router = useRouter(),
    route = useRoute(),
    gameStore = useGameStore()

  const text1 = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return 'поздравляем!'
      case IResultType.Timeout:
        return 'увы!'
      default:
        return ''
    }
  })

  const text2 = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return ''
      case IResultType.Timeout:
        return 'Вы не успели выполнить задание вовремя!'
      default:
        return ''
    }
  })

  const btnText = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return 'готово'
      case IResultType.Timeout:
        return 'готово'
      default:
        return ''
    }
  })

  const totalPoints = computed(() => {
    return gameStore.gamePoints
  })

  function next() {
    gameStore.setBaseValues()
    router.push({
      name: 'start'
    })
  }
  return {
    totalPoints,
    text1,
    text2,
    btnText,
    next
  }
}
