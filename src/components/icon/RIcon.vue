<script setup lang="ts">
import './assets/ricon.scss'
import sprite from './assets/rsprite.svg'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { RIconType } from '@/components/icon/RIconTypes'
import { RIconAnimate, RIconSize } from '@/components/icon/RIconTypes'

const props = defineProps({
  type: {
    type: String as PropType<RIconType>,
    required: true
  },
  size: {
    type: String as PropType<RIconSize>,
    default: RIconSize.DEFAULT
  },
  animate: {
    type: String as PropType<RIconAnimate>,
    default: RIconAnimate.NONE
  }
})

/**
 * Вычисляем адрес иконки
 */
const link = computed<string>(() => sprite + '#' + props.type)

/**
 * Вычисляем значения классов
 */
const sizeClass = computed<string>(() => (props.size ? 'r-icon_' + props.size : ''))
const animateClass = computed<string>(() => (props.animate ? 'r-icon_' + props.animate : ''))
</script>

<template>
  <svg class="r-icon" :class="[sizeClass, animateClass]">
    <use :xlink:href="link"></use>
  </svg>
</template>

<style lang="scss">
.r-icon {
  width: 18px;
  height: 18px;
}

.r-icon_big {
  width: 24px;
  height: 24px;
}

.r-icon_small {
  width: 14px;
  height: 14px;
}

.r-icon_rotate {
  animation: r_rotate 1s ease-in-out infinite;
}

.r-icon_flick {
  animation: r_flick 0.6s ease-in-out infinite;
}

@keyframes r_rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes r_flick {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
