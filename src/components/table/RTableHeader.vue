<script setup lang="ts">
import type { PropType } from 'vue'
import type { RTableColumn, RTableSort } from '@/components/table/RTableTypes'
import { StringFormat } from '@/libs/string'
import sortNotIcon from './assets/sort-not.svg'
import sortUpIcon from './assets/sort-up.svg'
import sortDownIcon from './assets/sort-down.svg'
import { inject, ref } from 'vue'
import RCheckbox from '@/components/checkbox/RCheckbox.vue'

defineProps({
  columns: {
    type: Array as PropType<RTableColumn[]>,
    required: true
  }
})

const emits = defineEmits(['sorting', 'checked'])

const sortIcon = ref<string>(sortNotIcon)
const sortData = ref<RTableSort>({ field: '', direction: 'not' })

const { checkAll }: any = inject('store')

/**
 * Обработчик события сортировки
 * @param column
 */
const sortHandler = (column: RTableColumn) => {
  if (!column.sortable) return

  let direction = 'not'

  switch (sortData.value.direction) {
    case 'not':
      direction = 'up'
      sortIcon.value = sortUpIcon
      break
    case 'up':
      direction = 'down'
      sortIcon.value = sortDownIcon
      break
    default:
      sortIcon.value = sortNotIcon
      direction = 'not'
  }

  sortData.value = { field: column.field, direction } as RTableSort
  emits('sorting', sortData)
}
</script>

<template>
  <tr>
    <th
      class="r-table__th"
      v-for="column in columns"
      :class="{ 'r-table__th_sortable': column.sortable }"
      :key="column.field"
      @click="sortHandler(column)"
    >
      <div class="r-table__flex">
        <template v-if="column.selectable">
          <r-checkbox v-model="checkAll" />
        </template>

        {{ StringFormat.capitalize(column.label || column.field) }}

        <template v-if="column.sortable">
          <template v-if="sortData.field === column.field">
            <span v-html="sortIcon"></span>
          </template>

          <template v-else>
            <span v-html="sortNotIcon"></span>
          </template>
        </template>
      </div>
    </th>
  </tr>
</template>
