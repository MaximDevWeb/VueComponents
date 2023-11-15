<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataItem } from '@/App.vue'

/**
 * Данный компонент приведен для примера
 * произвольной ячейки таблицы
 */

defineProps({
  item: {
    type: Object as PropType<DataItem>,
    required: true
  }
})
</script>

<template>
  <div class="user__info">
    <div class="user__login">{{ item.login }}</div>

    <div class="user__more">
      <div class="user__id">ID: {{ item.id }}</div>
      <div class="user__email">email: {{ item.email }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user__more {
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: #7e7e7e;
}
</style>
