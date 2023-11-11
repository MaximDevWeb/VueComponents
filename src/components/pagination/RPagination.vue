<script setup lang="ts">
import './assets/pagination.scss'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { RPaginationType } from '@/components/pagination/RPaginationTypes'
import { RPaginationDirections } from '@/components/pagination/RPaginationTypes'
import leftArrowIcon from './assets/left_arrow.svg'
import rightArrowIcon from './assets/right_arrow.svg'

const props = defineProps({
  count: {
    type: Number,
    default: 1,
    required: true
  },
  perPage: {
    type: Number,
    default: 20
  },
  type: {
    type: String as PropType<RPaginationType>,
    default: 'default'
  },
  short: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Настройки для пагинации
 */
const range = 2
const steps = computed<number>(() => Math.ceil(props.count / props.perPage))

/**
 * Вычисляем промежуток относительно текущей страницы
 */
const ranges = computed(() => {
  const full = []
  const from = Math.max(2, props.modelValue - range)
  const to = Math.min(steps.value, props.modelValue + range + 1)

  for (let i = from; i < to; i++) {
    full.push(i)
  }

  return full
})

/**
 * Обработчик события нажатия
 * кнопок следующая/предыдущая
 * @param direction
 */
const offsetHandler = (direction: RPaginationDirections) => {
  let step = props.modelValue

  if (direction === RPaginationDirections.PREV) {
    step = --step > 1 ? step : 1
  } else {
    step = ++step < steps.value ? step : steps.value
  }

  emits('update:modelValue', step)
}

/**
 * Обработчик события нажатия
 * на конкретную страницу
 * @param step
 */
const setStepHandler = (step: number) => {
  emits('update:modelValue', step)
}

/**
 * Вычисляем значения классов
 */
const typeClass = computed(() => 'r-pagination_' + props.type)
</script>

<template>
  <div v-if="steps > 1" class="r-pagination" :class="[typeClass]">
    <a
      href="#"
      class="r-pagination__prev"
      :class="{ 'r-pagination__icon_disable': modelValue === 1 }"
      @click.prevent="offsetHandler(RPaginationDirections.PREV)"
    >
      <div class="r-pagination__icon" v-html="leftArrowIcon"></div>
    </a>

    <div class="r-pagination__short" v-if="short">Страница {{ modelValue }} из {{ steps }}</div>

    <div class="r-pagination__steps" v-else>
      <a
        href="#"
        class="r-pagination__step"
        :class="{ 'r-pagination__step_active': modelValue === 1 }"
        @click.prevent="setStepHandler(1)"
      >
        1
      </a>

      <template v-if="modelValue - range > 2">
        <span class="r-pagination__dots">...</span>
      </template>

      <template v-for="step in ranges" :key="step">
        <a
          href="#"
          class="r-pagination__step"
          :class="{ 'r-pagination__step_active': step === modelValue }"
          @click.prevent="setStepHandler(step)"
        >
          {{ step }}
        </a>
      </template>

      <template v-if="modelValue + range < steps - 1">
        <span class="r-pagination__dots">...</span>
      </template>

      <a
        href="#"
        class="r-pagination__step"
        :class="{ 'r-pagination__step_active': modelValue === steps }"
        @click.prevent="setStepHandler(steps)"
      >
        {{ steps }}
      </a>
    </div>

    <a
      href="#"
      class="r-pagination__next"
      :class="{ 'r-pagination__icon_disable': modelValue === steps }"
      @click.prevent="offsetHandler(RPaginationDirections.NEXT)"
    >
      <div class="r-pagination__icon" v-html="rightArrowIcon"></div>
    </a>
  </div>
</template>
