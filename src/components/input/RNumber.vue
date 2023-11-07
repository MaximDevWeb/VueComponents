<script setup lang="ts">
import './assets/input.scss'
import { nextTick, ref } from 'vue'
import minusIcon from './assets/minus.svg'
import plusIcon from './assets/plus.svg'

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 10000
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number,
    default: 0
  },
  disable: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])
const number = ref(props.modelValue)
const input = ref<HTMLInputElement | null>(null)

/**
 * Обработка события изменения числа
 */
const changeHandler = async () => {
  if (!input.value) return

  let value = Number(input.value.value)
  value = Math.max(props.min, value)
  value = Math.min(props.max, value)
  emits('update:modelValue', value)

  number.value = 0
  await nextTick()
  number.value = props.modelValue
}

/**
 * Обработка события обработки нажатия
 * кнопок увеличить/уменьшить
 * @param direction
 */
const upDownHandler = (direction: string) => {
  if (!input.value) return

  if (direction === 'up') {
    input.value.stepUp()
  } else {
    input.value.stepDown()
  }

  changeHandler()
}
</script>

<template>
  <div class="r-input__wrapper" :class="{ 'r-number_disable': disable }">
    <a
      href="#"
      class="r-number__button"
      :class="{ 'r-number__button_inactive': number <= min }"
      @click.prevent="upDownHandler('down')"
      v-html="minusIcon"
    ></a>

    <input
      class="r-number"
      type="number"
      ref="input"
      :value="number"
      :max="max"
      :min="min"
      :step="step"
      @change="changeHandler"
    />

    <a
      href="#"
      class="r-number__button"
      :class="{ 'r-number__button_inactive': number >= max }"
      @click.prevent="upDownHandler('up')"
      v-html="plusIcon"
    ></a>
  </div>
</template>
