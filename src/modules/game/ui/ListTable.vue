<template>
  <div class="flex flex-col justify-center items-center gap-12">
    <div
      v-for="(category, index) in categories"
      :key="category.id"
      class="w-[910px] h-[250px] rounded-angels-big font-bold text-center text-white active:bg-[#6450A2] active:bg-[#6450A2] uppercase cursor-pointer"
      :class="{ 'bg-[#2AC4F4]': index % 2 === 0, 'bg-[#EE2866]': index % 2 !== 0 }"
      @click="goToQuestion(category)"
    >
      <div class="text-[64px] pt-[20px]">
        {{ category.name }}
      </div>
      <div class="text-[128px] mt-[-35px]">
        {{ category.point }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from '../entity/model/DTO/game.dto'
import type { PropType } from 'vue'
import { useListTableService } from '../entity/service/list.table.service'

defineProps({
  categories: {
    type: Array as PropType<ICategory[]>,
    default: () => []
  }
})

const { goToQuestion } = useListTableService()
</script>

<style scoped></style>
