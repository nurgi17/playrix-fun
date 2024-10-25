import { ref, computed, watch } from 'vue'
import type { ITimer } from '../model/DTO/game.dto'
import { IResultType } from '../model/DTO/game.dto'
import { useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
export function userQuestionTimerService(timer: number) {
  const router = useRouter(),
    gameStore = useGameStore()

  const inter = ref<ReturnType<typeof setTimeout>>(),
    seconds = ref(timer),
    timerObj = ref<ITimer>({
      minutes: 0,
      seconds: 0
    })

  const isRedTimer = computed(() => {
    return timer * 0.1 > seconds.value
  })

  watch(
    () => seconds.value,
    () => {
      if (seconds.value < 0) {
        stopTimer()
        gameStore.setBaseValues()
        router.push({ name: 'result', params: { type: IResultType.Timeout } })
      }
    }
  )
  function setTimer() {
    timerObj.value.minutes = Math.floor(seconds.value / 60)
    timerObj.value.seconds = seconds.value % 60
    seconds.value -= 1
  }
  function startTimer() {
    inter.value = setInterval(() => {
      setTimer()
      if (seconds.value < 0) {
        stopTimer()
      }
    }, 1000)
  }
  function stopTimer() {
    clearInterval(inter.value)
  }
  return {
    startTimer,
    stopTimer,
    timerObj,
    isRedTimer
  }
}
