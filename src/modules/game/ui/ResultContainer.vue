<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/back-main.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="bounce" appear>
      <div class="mt-[-70px] font-bold text-[#FFFFFF] text-center">
        <div class="uppercase text-[150px]">баллы:</div>
        <div class="text-[500px] mt-[-170px]">{{ totalPoints }}</div>
        <div class="mt-[-170px]">
          <div class="uppercase text-[96px]">
            {{ text1 }}
          </div>
          <div class="text-[64px]">
            {{ text2 }}
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="bottom-fade" appear>
      <Button class="pt-[185px]" :text="btnText" @click="next" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import Button from '../../../shared/ui/button/Button.vue'

import { useResultService } from '../entity/service/result.service'

const { totalPoints, text1, text2, btnText, next } = useResultService()
</script>

<style scoped></style>
