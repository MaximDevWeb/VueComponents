<script setup lang="ts">
import './assets/checkbox.scss'
import checkIcon from './assets/check.svg'
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [String, Number]
  },
  disable: {
    type: Boolean
  },
  modelValue: {
    type: [Array, Boolean]
  }
})

const emit = defineEmits(['update:modelValue'])

/**
 * Обрабатываем различные варианты значения
 * @param event
 */
const changeHandler = (event: Event) => {
  const target = event.target as HTMLInputElement

  let value: string[] | number[] | boolean

  if (Array.isArray(props.modelValue)) {
    if (target.checked) {
      value = [...props.modelValue, target.value].sort() as string[]
    } else {
      value = props.modelValue.filter((item) => item != target.value).sort() as string[]
    }
  } else {
    value = target.checked
  }

  emit('update:modelValue', value)
}

/**
 * Вычисляем отмечен элемент или нет
 */
const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  } else {
    return props.modelValue
  }
})

/**
 * Вычисляем значения классов
 */
const disableClass = computed<string>(() => (props.disable ? 'r-checkbox_disable' : ''))
</script>

<template>
  <label class="r-checkbox" :class="[disableClass]">
    <input type="checkbox" :checked="isChecked" :value="value" @change="changeHandler" />

    <span class="r-checkbox__field">
      <img :src="checkIcon" alt="check" />
    </span>

    <slot />
  </label>
</template>
