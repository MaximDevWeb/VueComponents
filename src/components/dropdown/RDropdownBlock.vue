<script setup lang="ts">
import './assets/dropdown.scss'
import RDropdownBack from '@/components/dropdown/RDropdownBack.vue'
import { inject } from 'vue'
import type { Height } from './RDropdownTypes'
import { ref } from 'vue'

defineProps({
  id: {
    type: String,
    default: ''
  }
})

const block = ref<HTMLElement | null>(null)

/**
 * Provide в компоненте RDropdown
 */
const height = inject('height') as Height

/**
 * Обработка события возврата назад
 */
const backHandler = () => {
  if (!block.value) return

  block.value.classList.remove('r-dropdown__block_visible')
  const parent = block.value.parentElement as HTMLElement

  parent.id ? height.change(parent.clientHeight) : height.reset()
}
</script>

<template>
  <div :id="id" class="r-dropdown__block" ref="block">
    <template v-if="id">
      <r-dropdown-back @click.stop="backHandler" />
    </template>
    <slot />
  </div>
</template>
./RDropdownTypes
