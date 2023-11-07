<script setup lang="ts">
import './assets/input.scss'

defineProps({
  rows: {
    type: Number,
    default: 4
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String
  },
  disable: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Обработка события ввода
 * @param event
 */
const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <div class="r-input__wrapper">
    <textarea
      class="r-textarea"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disable"
      :rows="rows"
      @input="inputHandler"
    ></textarea>
  </div>
</template>
