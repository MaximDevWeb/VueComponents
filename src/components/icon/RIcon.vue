<script setup lang="ts">
import './assets/ricon.scss'
import sprite from './assets/rsprite.svg'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { RIconType, RIconAnimate, RIconSize } from '@/components/icon/RIconTypes'

const props = defineProps({
  type: {
    type: String as PropType<RIconType>,
    required: true
  },
  size: {
    type: String as PropType<RIconSize>,
    default: 'default'
  },
  animate: {
    type: String as PropType<RIconAnimate>,
    default: 'none'
  }
})

/**
 * Вычисляем адрес иконки
 */
const link = computed<string>(() => sprite + '#' + props.type)

/**
 * Вычисляем значения классов
 */
const sizeClass = computed<string>(() => (props.size !== 'default' ? 'r-icon_' + props.size : ''))
const animateClass = computed<string>(() =>
  props.animate !== 'none' ? 'r-icon_' + props.animate : ''
)
</script>

<template>
  <svg class="r-icon" :class="[sizeClass, animateClass]">
    <use :xlink:href="link"></use>
  </svg>
</template>
