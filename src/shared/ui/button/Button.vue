<template>
  <div>
    <button
      class="uppercase text-[96px] font-bold w-[714px] h-[157px] text-[#000000] active:text-[#FFFFFF] bg-[url('/src/assets/img/back-btn-yellow.svg')] active:bg-[url('/src/assets/img/back-purple-btn.svg')] cursor-pointer"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>
