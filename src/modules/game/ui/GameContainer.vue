<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/back-main.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="bottom-fade" appear>
      <ListTable class="pt-[226px]" :categories="getGame?.categories" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useGameService } from '../entity/service/game.service'

import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import ListTable from './ListTable.vue'

const { getGame } = useGameService()
</script>

<style scoped></style>
