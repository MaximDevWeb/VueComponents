<script setup lang="ts">
import './assests/form.scss'
import { ref, watchEffect } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  info: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

const errorMsg = ref<string>('')

/**
 * Задаем значение строки ошибки при
 * изменении параметра
 */
watchEffect(() => (errorMsg.value = props.error))

/**
 * Обработка события изменения ввода
 */
const changeHandler = () => (errorMsg.value = '')
</script>

<template>
  <div class="r-form__row" :class="{ 'r-form__error': errorMsg }">
    <div class="r-form__label" v-if="label || errorMsg">
      <label>{{ label }}</label>

      <div class="r-form__message">{{ errorMsg }}</div>
    </div>

    <div class="r-form__input" @input="changeHandler" @change="changeHandler">
      <slot />
    </div>

    <div class="r-form__info" v-if="info">{{ info }}</div>
  </div>
</template>
