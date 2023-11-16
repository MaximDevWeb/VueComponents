<script setup lang="ts">
import type { PropType } from 'vue'
import type { RTableColumn } from '@/components/table/RTableTypes'
import { StringFormat } from '@/libs/string'
import sortNotIcon from './assets/sort-not.svg'
import sortUpIcon from './assets/sort-up.svg'
import sortDownIcon from './assets/sort-down.svg'
import RCheckbox from '@/components/checkbox/RCheckbox.vue'
import { useSort } from '@/components/table/model/Sort'
import { computed } from 'vue'
import { RTableDirection } from '@/components/table/RTableTypes'
import { useSelect } from '@/components/table/model/Select'

defineProps({
  columns: {
    type: Array as PropType<RTableColumn[]>,
    required: true
  }
})

const { sort, field, change } = useSort()
const { selectAll } = useSelect()

/**
 * Взаимосвязь направления сортировки и иконки
 */
const sortIconObject: any = {
  [RTableDirection.NOT]: sortNotIcon,
  [RTableDirection.UP]: sortUpIcon,
  [RTableDirection.DOWN]: sortDownIcon
}

const sortIcon = computed(() => sortIconObject[sort.value])

/**
 * Обработка события смены направления сортировки
 * @param column
 */
const sortHandler = (column: RTableColumn) => {
  if (column.sortable) change(column.field)
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
          <r-checkbox v-model="selectAll" />
        </template>

        {{ StringFormat.capitalize(column.label || column.field) }}

        <template v-if="column.sortable">
          <template v-if="column.field === field">
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
