<script setup lang="ts">
import type { PropType } from 'vue'
import type { RTableColumn } from '@/components/table/RTableTypes'
import RCheckbox from '@/components/checkbox/RCheckbox.vue'
import { useSelect } from '@/components/table/model/Select'

defineProps({
  item: {
    type: Object,
    required: true
  },
  columns: {
    type: Array as PropType<RTableColumn[]>,
    required: true
  }
})

const { selected } = useSelect()

/**
 * Функция трансформации значение
 * @param column
 * @param value
 */
const transform = (column: RTableColumn, value: string) => {
  if (column.transform) {
    return column.transform(value)
  }

  return value
}
</script>

<template>
  <tr class="r-table__tr">
    <template v-for="column in columns" :key="column.field">
      <td class="r-table__td" :style="{ width: column.width || 'auto' }">
        <div class="r-table__flex">
          <template v-if="column.selectable">
            <r-checkbox :value="item.id" v-model="selected" />
          </template>

          <template v-if="column.component">
            <component :is="column.component" :item="item" />
          </template>

          <template v-else>
            {{ transform(column, item[column.field]) }}
          </template>
        </div>
      </td>
    </template>
  </tr>
</template>
