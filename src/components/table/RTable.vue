<script setup lang="ts">
import './assets/table.scss'
import { type PropType, watch, watchEffect } from 'vue'
import RPagination from '@/components/pagination/RPagination.vue'
import type { RTableColumn, RTableItem } from '@/components/table/RTableTypes'
import RTableRow from '@/components/table/RTableRow.vue'
import RTableHeader from '@/components/table/RTableHeader.vue'
import { useRows } from '@/components/table/model/Rows'
import { useSelect } from '@/components/table/model/Select'

const props = defineProps({
  data: {
    type: Array as PropType<RTableItem[]>,
    default: () => []
  },
  perPage: {
    type: Number,
    default: 20
  },
  columns: {
    type: Array as PropType<RTableColumn[]>,
    default: () => []
  }
})

const emits = defineEmits(['select'])

const { all, page, length, rows } = useRows()
const { selected, getSelected } = useSelect()

/**
 * Обновляем значения при их изменении
 */
watchEffect(() => {
  all.value = props.data
  length.value = props.perPage
})

/**
 * Следим за обновлением выбранных элементов
 * и генерируем событие
 */
watch(selected, () => {
  emits('select', getSelected())
})
</script>

<template>
  <table class="r-table">
    <thead>
      <r-table-header :columns="columns" />
    </thead>

    <tbody>
      <r-table-row
        v-for="(item, index) in rows"
        :item="item"
        :columns="columns"
        :key="item.id || index"
      />
    </tbody>
  </table>

  <div class="r-table__pagination">
    <r-pagination :count="data.length" :per-page="length" v-model="page" />
  </div>
</template>
