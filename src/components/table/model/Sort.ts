import { ref } from 'vue'
import { RTableDirection, type RTableItem } from '@/components/table/RTableTypes'

const sort = ref<RTableDirection>(RTableDirection.NOT)
const field = ref<string>('')

/**
 * Функция сортировки по возрастанию
 * @param a
 * @param b
 */
const sortUp = (a: RTableItem, b: RTableItem) => {
  return a[field.value] < b[field.value] ? -1 : a[field.value] > b[field.value] ? 1 : 0
}

/**
 * Функция сортировки по убыванию
 * @param a
 * @param b
 */
const sortDown = (a: RTableItem, b: RTableItem) => {
  return a[field.value] > b[field.value] ? -1 : a[field.value] < b[field.value] ? 1 : 0
}

/**
 * Функция сортировки по умолчанию
 * @param a
 * @param b
 */
const sortNot = (a: RTableItem, b: RTableItem) => {
  return a.id - b.id
}

/**
 * Взаимосвязь смены направления
 */
const sortRelation: any = {
  [RTableDirection.NOT]: RTableDirection.UP,
  [RTableDirection.UP]: RTableDirection.DOWN,
  [RTableDirection.DOWN]: RTableDirection.NOT
}

/**
 * Взаимосвязь направления сортировки
 * и функции сортировки
 */
const sortRelationFun: any = {
  [RTableDirection.NOT]: sortNot,
  [RTableDirection.UP]: sortUp,
  [RTableDirection.DOWN]: sortDown
}

/**
 * Функция смены направления сортировки
 * @param column
 */
const change = (column: string) => {
  field.value = column
  sort.value = sortRelation[sort.value]
}

/**
 * Функция применения сортировки к списку
 * @param data
 */
const sortApply = (data: RTableItem[]) => {
  data.sort(sortRelationFun[sort.value])
}

export const useSort = () => ({
  sort,
  field,
  change,
  sortApply
})
