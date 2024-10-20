<template>
  <div
    class="w-[706px] h-[140px] rounded-ang uppercase text-white font-bold text-[64px] text-center pt-5"
    :class="{ 'bg-[#2AC4F4]': category.id % 2 !== 0, 'bg-[#EE2866]': category.id % 2 === 0 }"
  >
    {{ category.name }}
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICategory } from '../../../modules/game/entity/model/DTO/game.dto'
defineProps({
  category: {
    type: Object as PropType<ICategory>,
    default: () => {}
  }
})
</script>

<style scoped>
.rounded-ang {
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
}
</style>
