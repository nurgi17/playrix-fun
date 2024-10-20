<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center justify-center pt-[138px]">
      <img src="../../../assets/img/playrix-logo.svg" alt="playrix logo" />
    </div>
    <div class="font-bold text-[96px] uppercase text-white pt-[32px] pb-[63px]">
      {{ formattedTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const currentTime = ref(new Date())

const formattedTime = computed(() => {
  const hours = String(currentTime.value.getHours()).padStart(2, '0')
  const minutes = String(currentTime.value.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
})

function updateTime() {
  currentTime.value = new Date()
}

function init() {
  updateTime()
  setInterval(updateTime, 60000)
}

onMounted(() => {
  init()
})
</script>
