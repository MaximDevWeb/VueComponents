import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import { ref } from 'vue'
import RNumber from '@/components/input/RNumber.vue'

const meta: Meta<typeof RNumber> = {
  component: RNumber,
  title: 'Form/Number',
  argTypes: {
    max: {
      control: { type: 'number' },
      description: 'Максимальное значения поля'
    },
    min: {
      control: { type: 'number' },
      description: 'Минимальное значения поля'
    },
    step: {
      control: { type: 'number' },
      description: 'Шаг значения поля'
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
type Story = StoryObj<typeof RNumber>

export const Basic: Story = {
  render: (args) => ({
    components: { RNumber },
    setup() {
      const value = ref(10)

      return {
        args,
        value
      }
    },
    template: `
      <div style="margin-bottom: 10px">Значение: {{ value }}</div>

      <div style="width: 300px">
        <r-number v-model="value" v-bind="args"/>
      </div>
    `
  }),
  args: {
    max: 1000,
    min: 0,
    step: 1,
    disable: false
  }
}
