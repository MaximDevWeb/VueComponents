<script setup lang="ts">
import type { PropType } from 'vue'
import type { ValidationData } from '@/libs/form'
import { Validation } from '@/libs/form'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  validation: {
    type: Array as PropType<ValidationData[]>,
    default: () => []
  }
})

const emits = defineEmits(['submit', 'errors'])

/**
 * Обрабатываем событие отправки формы
 */
const submitHandler = () => {
  const validator = new Validation()

  props.validation?.forEach((item) => {
    validator.setField(item.field).setRules(item.rules).valid(props.data[item.field])
  })

  if (validator.isErrors()) {
    emits('errors', validator.getErrors())
  } else {
    emits('submit')
  }
}
</script>

<template>
  <form class="r-form" @submit.prevent="submitHandler">
    <slot />
  </form>
</template>
