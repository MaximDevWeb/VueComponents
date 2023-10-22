<script setup lang="ts">
import './assets/box_group.scss'
import type { PropType } from 'vue'
import type {
  RBoxGroupGrid,
  RBoxGroupItem,
  RBoxGroupPosition,
  RBoxGroupType,
  RBoxGroupValue
} from '@/components/box_group/RBoxGroupTypes'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<RBoxGroupType>,
    default: 'checkbox'
  },
  position: {
    type: String as PropType<RBoxGroupPosition>,
    default: 'start'
  },
  list: {
    type: Array as PropType<RBoxGroupItem[]>,
    required: true,
    default: () => []
  },
  grid: {
    type: Number as PropType<RBoxGroupGrid>,
    default: 3
  },
  disable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Array, String, Number] as PropType<RBoxGroupValue>,
    default: ''
  }
})

/**
 * Значение элемента
 */
const value = ref<RBoxGroupValue>(props.modelValue)

const emits = defineEmits(['update:modelValue'])

/**
 * Обрабатываем изменения значения
 */
watch(value, () => {
  emits('update:modelValue', value.value)
})

/**
 * Вычисляем значения классов
 */
const gridClass = computed<string>(() => 'r-box-group__grid_' + props.grid)
const positionClass = computed<string>(() => 'r-box-group__item_' + props.position)
const disableClass = computed<string>(() => (props.disable ? 'r-box-group_disable' : ''))
</script>

<template>
  <div class="r-box-group" :class="[gridClass, disableClass]">
    <template v-for="item in list" :key="item.value">
      <label>
        <input :type="type" :value="item.value" v-model="value" />

        <div class="r-box-group__item" :class="[positionClass]">
          <div class="r-box-group__input">
            <div class="r-box-group__mark"></div>
          </div>

          <div class="r-box-group__data">
            <div class="r-box-group__icon" v-if="item.icon">
              <component :is="item.icon.component" v-bind="item.icon.args" />
            </div>

            <div class="r-box-group__image" v-if="item.image">
              <img :src="item.image" :alt="item.title" />
            </div>

            <div>
              <div class="r-box-group__title">{{ item.title }}</div>

              <div class="r-box-group__content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </label>
    </template>
  </div>
</template>
