<script setup lang="ts">
import './assets/table.scss'
import { computed, type PropType, provide, type Ref, ref, watch } from 'vue'
import RPagination from '@/components/pagination/RPagination.vue'
import type { RTableColumn, RTableSort } from '@/components/table/RTableTypes'
import RTableRow from '@/components/table/RTableRow.vue'
import RTableHeader from '@/components/table/RTableHeader.vue'

const props = defineProps({
  data: {
    type: Array,
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

const emits = defineEmits(['selected'])

const page = ref<number>(1)
const fullRows = ref(props.data)
const checkedRows = ref([])
const checkAll = ref<boolean>(false)

provide('store', { checkAll })

/**
 * Получаем текущий срез строк
 */
const rows = computed(() => {
  return fullRows.value?.slice((page.value - 1) * props.perPage, page.value * props.perPage)
})

/**
 * Обрабатываем событие сортировки элементов
 * @param sort
 */
const sortingHandler = (sort: Ref<RTableSort>) => {
  const field = sort.value.field

  switch (sort.value.direction) {
    case 'up':
      fullRows.value.sort((a, b) => {
        return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0
      })
      break
    case 'down':
      fullRows.value.sort((a, b) => {
        return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0
      })
      break
    default:
      fullRows.value.sort((a, b) => {
        return a['id'] - b['id']
      })
  }
}

/**
 * Наблюдаем за изменением выбранных элементов
 */
watch(checkedRows, () => {
  emits(
    'selected',
    checkedRows.value.map((item) => Number(item))
  )
})

watch(checkAll, () => {
  if (checkAll.value) {
    checkedRows.value = rows.value?.reduce((acc: number[], item) => [...acc, item.id], [])
  } else if (!checkAll.value && checkedRows.value.length === rows.value?.length) {
    checkedRows.value = []
  }
})
</script>

<template>
  <table class="r-table">
    <thead>
      <r-table-header :columns="columns" @sorting="sortingHandler" />
    </thead>

    <tbody>
      <r-table-row
        v-for="(item, index) in rows"
        :item="item"
        :columns="columns"
        v-model="checkedRows"
        :key="item.id || index"
      />
    </tbody>
  </table>

  <div class="r-table__pagination">
    <r-pagination :count="data.length" :per-page="perPage" v-model="page" />
  </div>
</template>
