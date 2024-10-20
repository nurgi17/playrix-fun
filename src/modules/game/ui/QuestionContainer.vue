<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/back-main.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="bottom-fade" appear>
      <Badge :category="getCategory" />
    </Transition>
    <Transition name="bounce" appear @after-enter="startRandomizingText">
      <div class="text-white text-[64px] font-bold text-center mt-[100px]">
        {{ displayedText }}
      </div>
    </Transition>
    <Transition name="bottom-fade" appear>
      <div v-if="getQuestion" class="flex flex-col items-center mt-[131px]">
        <Transition v-if="!loading1" name="bounce" appear>
          <QuestionTimer :timer="getQuestion[0].timer" />
        </Transition>
        <div class="text-white text-[48px] font-bold text-center mt-[50px]">
          {{ `Выполни задание и получи ${getCategory.point}` }}
        </div>
      </div>
    </Transition>
    <Transition v-if="!loading" name="bottom-fade" appear>
      <Button class="pt-[185px]" :text="'готово'" @click="done" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuestionInService } from '../entity/service/question.in.service'

import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import QuestionTimer from './QuestionTimer.vue'
import Badge from '../../../shared/ui/badge/Badge.vue'
import Button from '../../../shared/ui/button/Button.vue'

const displayedText = ref(''),
  randomTexts = ['Рандомайзер заданий', 'Загрузка...', 'Генерация задания...'],
  { getQuestion, getCategory, done } = useQuestionInService(),
  loading = ref(true),
  loading1 = ref(true)

const startRandomizingText = () => {
  let index = 0,
    count = 0
  const interval = setInterval(() => {
    count++
    displayedText.value = randomTexts[index]
    index = (index + 1) % randomTexts.length
    if (count === 1) {
      loading1.value = false
    }
  }, 400)

  setTimeout(() => {
    clearInterval(interval)
    displayedText.value = getQuestion.value[0]?.question
    loading.value = false
  }, 1500)
}
</script>

<style scoped></style>
