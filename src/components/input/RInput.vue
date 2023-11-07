<script setup lang="ts">
import './assets/input.scss'
import type { PropType } from 'vue'
import type { RInputType } from '@/components/input/RInputTypes'

defineProps({
  type: {
    type: String as PropType<RInputType>,
    default: 'text'
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
    <input
      class="r-input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disable"
      @input="inputHandler"
    />
  </div>
</template>
