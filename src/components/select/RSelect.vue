<script setup lang="ts">
import './assets/select.scss'
import downIcon from './assets/down.svg'
import type { PropType } from 'vue'
import type { RSelectOption } from '@/components/select/RSelectTypes'
import { computed, ref } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Выберите элемент...'
  },
  options: {
    type: Array as PropType<RSelectOption[]>,
    default: [],
    required: true
  },
  disable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])

/**
 * Обрабатываем событие изменения значения
 * @param value
 */
const changeHandler = (value: string | number) => {
  emits('update:modelValue', value)
}

const active = ref<boolean>(false)

/**
 * Обрабатываем события смены открытия/закрытия
 */
const activeToggleHandler = () => {
  active.value = !active.value
}

/**
 * Обрабатываем события смены закрытия
 */
const activeHideHandler = () => {
  active.value = false
}

/**
 * Вычисляем значение элемента
 */
const value = computed(() => {
  return props.options?.find((item) => item.value === props.modelValue)?.label
})

/**
 * Вычисляем значения классов
 */
const disableClass = computed<string>(() => (props.disable ? 'r-select_disable' : ''))
</script>

<template>
  <div
    class="r-select"
    :class="[{ 'r-select_active': active }, disableClass]"
    @click="activeToggleHandler"
    v-click-outside="activeHideHandler"
  >
    <div class="r-select__field">
      <div v-if="modelValue" class="r-select__value">
        {{ value }}
      </div>

      <div v-else class="r-select__placeholder">
        {{ placeholder }}
      </div>

      <span class="r-select__icon" v-html="downIcon"></span>
    </div>

    <div class="r-select__list">
      <div
        v-for="option in options"
        class="r-select__item"
        :class="{ 'r-select__item_selected': option.value === modelValue }"
        @click="changeHandler(option.value)"
      >
        <div>
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>
