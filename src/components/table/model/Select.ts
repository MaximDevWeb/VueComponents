import { ref, watch } from 'vue'
import { useRows } from '@/components/table/model/Rows'

const selectAll = ref<boolean>(false)
const selected = ref<number[]>([])

const { rows } = useRows()

/**
 * Получить список выбранных элементов
 */
const getSelected = () => {
  return selected.value.map((item) => Number(item))
}

/**
 * Следим за состоянием флага
 * о полном выделении
 */
watch(selectAll, () => {
  if (selectAll.value) {
    selected.value = rows.value.reduce((acc, item) => [...acc, item.id], [] as number[])
  } else {
    if (selected.value.length === rows.value.length) selected.value = []
  }
})

/**
 * Следим за выделенными элементами
 * и меняем флаг о полном выделении
 */
watch(selected, () => {
  if (selected.value.length !== rows.value.length) selectAll.value = false
})

/**
 * Следим за изменением списка и обнуляем значения
 */
watch(rows, () => {
  selectAll.value = false
  selected.value = []
})

export const useSelect = () => ({
  selectAll,
  selected,
  getSelected
})
