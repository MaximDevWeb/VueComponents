<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataItem } from '@/App.vue'
import { computed } from 'vue'

/**
 * Данный компонент приведен для примера
 * произвольной ячейки таблицы
 */

const props = defineProps({
  item: {
    type: Object as PropType<DataItem>,
    required: true
  }
})

const roleClass = computed(() => {
  switch (props.item?.role) {
    case 'admin':
      return 'role_admin'
    case 'client':
      return 'role_client'
    default:
      return 'role_other'
  }
})
</script>

<template>
  <div class="role" :class="[roleClass]">
    {{ item.role }}
  </div>
</template>

<style scoped lang="scss">
.role {
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  background-color: #d7dfe9;
  padding: 4px 8px;
  border-radius: 5px;
}

.role_admin {
  background-color: #ff7a72;
  color: white;
}

.role_client {
  background-color: #4a72ff;
  color: white;
}
</style>
