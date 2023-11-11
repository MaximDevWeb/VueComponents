<script setup lang="ts">
import './assets/input.scss'
import { computed, ref } from 'vue'
import type { RPasswordType } from '@/components/input/RInputTypes'
import hideIcon from '@/components/input/assets/hide.svg'
import visibleIcon from '@/components/input/assets/visible.svg'

defineProps({
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

const type = ref<RPasswordType>('password')
const emits = defineEmits(['update:modelValue'])

/**
 * Обработка события ввода
 * @param event
 */
const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}

/**
 * Вычисляем тип иконки
 */
const icon = computed(() => {
  return type.value === 'password' ? hideIcon : visibleIcon
})

/**
 * Обработчик события смены типа поля
 */
const toggleTypeHandler = () => {
  type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="r-input__wrapper">
    <input
      class="r-password"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disable"
      @input="inputHandler"
    />

    <div class="r-password__icon" v-html="icon" @click.stop="toggleTypeHandler"></div>
  </div>
</template>
