<template>
  <div
    v-if="timerObj.minutes > 0 || timerObj.seconds > 0"
    class="uppercase text-[128px] font-bold w-[606px] h-[167px] rounded-angels text-center"
    :class="{
      'bg-[#EE2866] text-[#FFFFFF]': isRedTimer,
      'bg-[#6450A2] text-white': !isRedTimer
    }"
  >
    {{ (timerObj.minutes < 10 ? '0' : '') + timerObj.minutes }}:{{
      (timerObj.seconds < 10 ? '0' : '') + timerObj.seconds
    }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { userQuestionTimerService } from '../entity/service/question.timer.service'

const props = defineProps({
  timer: {
    type: Number,
    default: 0
  }
})

const { startTimer, stopTimer, timerObj, isRedTimer } = userQuestionTimerService(props.timer)

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style scoped></style>
