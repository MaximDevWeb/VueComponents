import { ref, computed, watch } from 'vue'
import type { RTableItem } from '@/components/table/RTableTypes'
import { useSort } from '@/components/table/model/Sort'

const all = ref<RTableItem[]>([])
const page = ref<number>(1)
const length = ref<number>(20)

/**
 * Вычисляем текущий список элементов страницы
 */
const rows = computed(() => {
  return all.value.slice((page.value - 1) * length.value, page.value * length.value)
})

/**
 * Следим за сортировкой и применяем
 * функцию при ее изменении
 */
const { sort, sortApply } = useSort()

watch(sort, () => {
  sortApply(all.value)
})

export const useRows = () => ({
  all,
  page,
  length,
  rows
})
