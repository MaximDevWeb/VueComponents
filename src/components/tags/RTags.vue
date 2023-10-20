<script setup lang="ts">
import './assets/tags.scss'
import removeIcon from './assets/remove.svg'
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Введите и нажмите ввод'
  },
  disable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Array,
    require: true,
    default: []
  }
})

/**
 * Вычисляем значение заполнителя
 */
const placeholderText = computed(() => (props.modelValue.length ? '' : props.placeholder))

const emits = defineEmits(['update:modelValue'])

/**
 * Обработка события добавления тега
 * @param event
 */
const addTagHandler = (event: Event) => {
  const target = event.target as HTMLInputElement

  props.modelValue.push(target.value)
  emits('update:modelValue', props.modelValue)

  target.value = ''
}

/**
 * Обработка события удаления тега
 * @param value
 */
const removeTagHandler = (value: string) => {
  const result = props.modelValue.filter((item) => item !== value)
  emits('update:modelValue', result)
}

/**
 * Вычисляем значения классов
 */
const disableClass = computed<string>(() => (props.disable ? 'r-tags_disable' : ''))
</script>

<template>
  <div class="r-tags" :class="disableClass">
    <template v-if="modelValue.length">
      <div v-for="tag in modelValue" class="r-tags__item">
        {{ tag }}
        <div
          class="r-tags__close"
          v-html="removeIcon"
          @click="removeTagHandler(tag as string)"
        ></div>
      </div>
    </template>

    <div class="r-tags__input">
      <input type="text" :placeholder="placeholderText" @change.prevent="addTagHandler" />
    </div>
  </div>
</template>
