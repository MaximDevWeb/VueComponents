<script setup lang="ts">
import './assets/dropdown.scss'
import arrowIcon from './assets/arrow.svg'
import { inject } from 'vue'
import type { Height } from './RDropdownTypes'

const props = defineProps({
  target: {
    type: String,
    required: true
  }
})

/**
 * Provide в компоненте RDropdown
 */
const height = inject('height') as Height

/**
 * Обработка события перехода в подкатегорию
 */
const visibleTargetHandler = () => {
  const target = document.querySelector(`#${props.target}`) as HTMLElement

  target.classList.add('r-dropdown__block_visible')
  height.change(target.clientHeight)
}
</script>

<template>
  <div class="r-dropdown__marker" @click.stop="visibleTargetHandler">
    <div class="r-dropdown__slot">
      <slot />
    </div>

    <div class="r-dropdown__arrow" v-html="arrowIcon"></div>
  </div>
</template>
./RDropdownTypes
