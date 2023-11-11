<script setup lang="ts">
import './assets/switch.scss'
import type { PropType } from 'vue'
import type { RSwitchMode } from '@/components/switch/RSwitchTypes'
import { computed } from 'vue'

const props = defineProps({
  mode: {
    type: String as PropType<RSwitchMode>,
    default: 'default'
  },
  disable: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Обрабатываем событие изменения значения
 * @param event
 */
const changeHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.checked)
}

/**
 * Вычисляем значения классов
 */
const modeClass = computed<string>(() => (props.mode === 'dark' ? 'r-switch_dark' : ''))
const smallClass = computed<string>(() => (props.small ? 'r-switch_small' : ''))
const disableClass = computed<string>(() => (props.disable ? 'r-switch_disable' : ''))
</script>

<template>
  <label class="r-switch" :class="[modeClass, disableClass, smallClass]">
    <input type="checkbox" :checked="modelValue" @change="changeHandler" />

    <span class="r-switch__field">
      <span class="r-switch__slider"></span>
    </span>

    <slot />
  </label>
</template>
