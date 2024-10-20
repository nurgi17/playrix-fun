<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/back-main.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="slide-fade" appear>
      <div class="pt-[58px]">
        <p
          v-for="i in 3"
          :key="i"
          class="font-bold text-[150px] text-white uppercase opacity-50 mt-[-100px]"
        >
          Challenge
        </p>
        <p class="font-bold text-[150px] text-white uppercase mt-[-100px]">Challenge</p>
        <p
          v-for="i in 3"
          :key="i"
          class="font-bold text-[150px] text-white uppercase opacity-50 mt-[-100px]"
        >
          Challenge
        </p>
      </div>
    </Transition>
    <Transition name="slide-fade" appear>
      <div>
        <Button class="pt-[116px]" @click="start" :text="'Начать'" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import Button from '../../../shared/ui/button/Button.vue'

import { onMounted } from 'vue'
import { useStartService } from '../entity/service/start.service'
import { useGameService } from '../entity/service/game.service'

const { start } = useStartService(),
  { setNewGame } = useGameService()

onMounted(() => {
  setNewGame()
})
</script>
