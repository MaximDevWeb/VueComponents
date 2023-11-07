import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RInput from '@/components/input/RInput.vue'
import { ref } from 'vue'
import { RInputTypeArray } from '@/components/input/RInputTypes'

const meta: Meta<typeof RInput> = {
  component: RInput,
  title: 'Form/Input',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: RInputTypeArray,
      description: 'Тип элемента ввода'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Заполнитель поля'
    },
    disable: {
      control: { type: 'boolean' },
      description: 'Неактивное состояние'
    },
    modelValue: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof RInput>

export const Basic: Story = {
  render: (args) => ({
    components: { RInput },
    setup() {
      const value = ref('')

      return {
        args,
        value
      }
    },
    template: `
      <div style="margin-bottom: 10px">Текст: {{ value }}</div>

      <div style="width: 300px">
        <r-input v-model="value" v-bind="args"/>
      </div>
    `
  }),
  args: {
    type: 'text',
    placeholder: 'Введите текст',
    disable: false
  }
}
