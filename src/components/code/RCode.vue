<script setup lang="ts">
import './assets/code.scss'
import { computed, ref } from 'vue'

const props = defineProps({
  length: {
    type: Number,
    default: 4
  },
  disable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Список полей кода
 */
const fields = ref<HTMLInputElement[]>([])

/**
 * Обработчик события вставки кода
 * @param event
 */
const pasteHandler = (event: ClipboardEvent) => {
  let code = event.clipboardData?.getData('text') || ''

  code.split('').forEach((item, index) => {
    if (!fields.value[index]) return

    fields.value[index].value = item
    fields.value[index].focus()
  })
}

/**
 * Обработчик события ввода кода
 * @param event
 */
const keyDownHandler = (event: Event) => {
  const { value, index } = getEventData(event)
  if (value) fields.value[index + 1]?.focus()
}

/**
 * Обработчик события удаления кода
 * @param event
 */
const deleteHandler = (event: Event) => {
  const { target, index } = getEventData(event)
  target.value = ''
  fields.value[index - 1]?.focus()

  getCode()
}

/**
 * Обработчик события изменения кода
 */
const inputHandler = () => {
  getCode()
}

/**
 * Функция получения данных события
 * @param event
 */
const getEventData = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  const index = fields.value.findIndex((item) => item === target)

  return {
    target,
    value,
    index
  }
}

const getCode = () => {
  let code = fields.value.reduce((prev, item) => prev + item.value, '')
  emits('update:modelValue', code)
}

/**
 * Вычисляем значения классов
 */
const disableClass = computed<string>(() => (props.disable ? 'r-code_disable' : ''))
</script>

<template>
  <div class="r-code__list" :class="[disableClass]" @paste="pasteHandler">
    <div class="r-code__item" v-for="index in length" :key="index">
      <input
        class="r-code__input"
        type="text"
        maxlength="1"
        ref="fields"
        @keydown.delete.prevent="deleteHandler"
        @keydown="keyDownHandler"
        @input="inputHandler"
      />
    </div>
  </div>
</template>
