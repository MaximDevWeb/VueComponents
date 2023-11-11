<script setup lang="ts">
import './assets/dropdown.scss'
import { provide, ref } from 'vue'
import type { Height } from './RDropdownTypes'

const list = ref<null | HTMLElement>(null)
const visible = ref<boolean>(false)

/**
 * Объект для управления высотой элемента
 */
const height: Height = {
  change: (height: number) => {
    if (!list.value) return
    list.value.style.maxHeight = height + 'px'
  },
  reset: () => {
    if (!list.value) return
    list.value.style.maxHeight = getListHeight() + 'px'
  }
}

/**
 * Транслируем объект управления высотой потомкам
 */
provide('height', height)

/**
 * Обработка события клика по элементу
 */
const toogleVisibleHandler = () => {
  visible.value = !visible.value
  !visible.value ? resetList() : false
}

/**
 * Обработка события клика вне элемента
 */
const hideHandler = () => {
  visible.value = false
  resetList()
}

/**
 * Функция сброса списка к начальному состоянию
 */
const resetList = () => {
  setTimeout(() => {
    document.querySelectorAll('.r-dropdown__block_visible').forEach((item: Element) => {
      item.classList.remove('r-dropdown__block_visible')
    })

    height.reset()
  }, 300)
}

/**
 * Функция вычисления высоты вложенных элементов
 * с учетом высоты обводки
 */
const getListHeight = () => {
  if (!list.value) return

  let calculateHeight = 0
  const children = list.value.children

  for (let i = 0; i < children.length; i++) {
    calculateHeight += children[i].clientHeight
  }

  return calculateHeight + Number(list.value.style.borderWidth) * 2
}
</script>

<template>
  <div class="r-dropdown" @click="toogleVisibleHandler" v-click-outside="hideHandler">
    <div class="r-dropdown__target">
      <slot name="target" />
    </div>

    <div class="r-dropdown__list" :class="{ 'r-dropdown__list_visible': visible }" ref="list">
      <slot name="list" />
    </div>
  </div>
</template>
./RDropdownTypes
