<script setup lang="ts">
import './assets/radio.scss'
import checkIcon from './assets/check.svg'
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
    default: ''
  },
  disable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Boolean]
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Обрабатываем событие изменения значения
 * @param value
 */
const changeHandler = (value: string | number | boolean) => {
  emits('update:modelValue', value)
}

/**
 * Вычисляем отмечен элемент или нет
 */
const isChecked = computed(() => props.value === props.modelValue)

/**
 * Вычисляем значения классов
 */
const disableClass = computed<string>(() => (props.disable ? 'r-checkbox_disable' : ''))
</script>

<template>
  <label class="r-radio" :class="[disableClass]">
    <input type="radio" :checked="isChecked" :value="value" @change="changeHandler(value)" />

    <span class="r-radio__field">
      <img :src="checkIcon" alt="check" />
    </span>

    <slot />
  </label>
</template>
