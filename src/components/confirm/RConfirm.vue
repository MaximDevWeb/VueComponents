<script setup lang="ts">
import './assets/confirm.scss'
import RButton from '@/components/button/RButton.vue'
import { ref } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: 'Подтвердите действие'
  },
  subHeader: {
    type: String,
    default: ''
  },
  event: {
    type: Function,
    required: true
  }
})

const open = ref<boolean>(false)
const emits = defineEmits(['cancel', 'confirm'])

/**
 * Обработка события клика по слоту
 */
const clickHandler = () => {
  open.value = true
}

/**
 * Обработка события принятия действия
 */
const confirmHandler = () => {
  open.value = false

  emits('confirm')
  props.event()
}

/**
 * Обработка события отмены действия
 */
const cancelHandler = () => {
  open.value = false

  emits('cancel')
}

/**
 * Обработка события клика вне
 * @param event
 */
const outsideHandler = (event: Event) => {
  const target = event.target as HTMLElement

  if (target && target.classList.contains('r-confirm__wrapper')) {
    cancelHandler()
  }
}
</script>

<template>
  <span @click="clickHandler">
    <slot />
  </span>

  <div
    class="r-confirm__wrapper"
    :class="{ 'r-confirm__wrapper_visible': open }"
    @click="outsideHandler"
  >
    <div class="r-confirm">
      <div class="r-confirm__header">
        {{ header }}
      </div>

      <div class="r-confirm__subheader" v-if="subHeader">
        {{ subHeader }}
      </div>

      <div class="r-confirm__buttons">
        <r-button @click="confirmHandler">Подтвердить</r-button>
        <r-button @click="cancelHandler" type="danger-light">Отмена</r-button>
      </div>
    </div>
  </div>
</template>
