import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import { ref } from 'vue'
import RTextarea from '@/components/input/RTextarea.vue'

const meta: Meta<typeof RTextarea> = {
  component: RTextarea,
  title: 'Form/TextArea',
  argTypes: {
    rows: {
      control: { type: 'number' },
      description: 'Количество строк поля'
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
type Story = StoryObj<typeof RTextarea>

export const Basic: Story = {
  render: (args) => ({
    components: { RTextarea },
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
        <r-textarea v-model="value" v-bind="args"/>
      </div>
    `
  }),
  args: {
    rows: 4,
    placeholder: 'Введите текст',
    disable: false
  }
}
