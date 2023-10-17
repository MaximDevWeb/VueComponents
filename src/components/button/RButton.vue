<script setup lang="ts">
import './assets/button.scss'
import type { PropType } from 'vue'
import { computed } from 'vue'
import RIcon from '@/components/icon/RIcon.vue'
import type { RButtonSize, RButtonTarget, RButtonType } from '@/components/button/RButtonTypes'

const props = defineProps({
  target: {
    type: String as PropType<RButtonTarget>,
    default: 'button'
  },
  type: {
    type: String as PropType<RButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<RButtonSize>,
    default: ''
  },
  disable: {
    type: Boolean,
    default: false
  },
  load: {
    type: Boolean,
    default: false
  }
})

/**
 * Вычисляем значения классов
 */
const typeClass = computed<string>(() => 'r-button_' + props.type)
const sizeClass = computed<string>(() => (props.size ? 'r-button_' + props.size : ''))
const disableClass = computed<string>(() => (props.disable ? 'r-button_disable' : ''))
const loadClass = computed<string>(() => (props.load ? 'r-button_load' : ''))
</script>

<template>
  <button class="r-button" :class="[typeClass, sizeClass, disableClass, loadClass]" :type="target">
    <slot v-if="!load" />
    <template v-else>
      <r-icon type="spinner" animate="rotate" size="small" />
    </template>
  </button>
</template>
