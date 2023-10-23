<script setup lang="ts">
import type { RAlertType } from '@/components/alert/RAlertTypes'
import type { PropType } from 'vue'
import './assets/alert.scss'
import closeIcon from './assets/close.svg'
import checkIcon from './assets/check.svg'
import errorIcon from './assets/error.svg'
import warningIcon from './assets/warning.svg'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<RAlertType>,
    default: 'default'
  },
  title: {
    type: String,
    default: ''
  },
  bordered: {
    type: Boolean,
    default: false
  },
  sideBar: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])

const alertIcon = computed(() => {
  switch (props.type) {
    case 'error':
      return errorIcon
    case 'success':
      return checkIcon
    default:
      return warningIcon
  }
})

const closeHandler = (event: Event) => {
  emits('close', {
    event: event
  })
}

const typeClass = computed(() => 'r-alert_' + props.type)
const borderedClass = computed(() => (props.bordered ? '' : 'r-alert_no-border'))
const sideBarClass = computed(() => (props.sideBar ? 'r-alert_side-bar' : ''))
</script>

<template>
  <div class="r-alert" :class="[typeClass, borderedClass, sideBarClass]">
    <div class="r-alert__prefix">
      <div class="r-alert__icon" v-html="alertIcon"></div>
    </div>

    <div>
      <div class="r-alert__title" v-if="title">{{ title }}</div>
      <div class="r-alert__content">
        <slot />
      </div>
    </div>

    <div class="r-alert__close" @click="closeHandler">
      <div class="r-alert__close-icon" v-html="closeIcon"></div>
    </div>
  </div>
</template>
