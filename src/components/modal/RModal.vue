<script setup lang="ts">
import './assets/modal.scss'
import closeIcon from './assets/close.svg'

defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])

/**
 * Обработка события клика вне модального окна
 * @param event
 */
const outsideHandler = (event: Event) => {
  const target = event.target as HTMLElement

  if (target && target.classList.contains('r-modal__wrapper')) {
    closeHandler()
  }
}

/**
 * Обработка события закрытия модального окна
 */
const closeHandler = () => {
  emits('close')
}
</script>

<template>
  <div
    class="r-modal__wrapper"
    :class="{ 'r-modal__wrapper_visible': open }"
    @click="outsideHandler"
  >
    <div class="r-modal">
      <a href="#" class="r-modal__close" v-html="closeIcon" @click.prevent="closeHandler"></a>

      <slot />
    </div>
  </div>
</template>
