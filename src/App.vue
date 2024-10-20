<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

import { useGameService } from './modules/game/entity/service/game.service'

const { setNewGame } = useGameService()

onMounted(() => {
  setNewGame()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
