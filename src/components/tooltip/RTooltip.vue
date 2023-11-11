<script setup lang="ts">
import './assets/tooltipe.scss'
import type { PropType } from 'vue'
import type { RTooltipMode, RTooltipPosition } from '@/components/tooltip/RTooltipTipes'
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  mode: {
    type: String as PropType<RTooltipMode>,
    default: 'default'
  },
  position: {
    type: String as PropType<RTooltipPosition>,
    default: 'top'
  }
})

/**
 * Вычисляем значения классов
 */
const modeClass = computed(() => 'r-tooltip_' + props.mode)
const positionClass = computed(() => 'r-tooltip_' + props.position)
</script>

<template>
  <div class="r-tooltip" :class="[modeClass, positionClass]">
    <div class="r-tooltip__wrapper">
      <div class="r-tooltip__indicator"></div>

      <div class="r-tooltip__title">{{ title }}</div>
      <div class="r-tooltip__content">{{ content }}</div>
    </div>

    <slot />
  </div>
</template>
