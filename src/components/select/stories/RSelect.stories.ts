import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RSelect from '@/components/select/RSelect.vue'
import { ref } from 'vue'
import { type RSelectOption } from '@/components/select/RSelectTypes'

const meta: Meta<typeof RSelect> = {
  title: 'Form/Select',
  component: RSelect,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Текст при отсутствии значения'
    },
    options: {
      control: { type: 'array' },
      description: 'Значения для списка вариантов'
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
type Story = StoryObj<typeof RSelect>

const options: RSelectOption[] = [
  { label: 'Иван', value: 'ivan' },
  { label: 'Максим', value: 'maxim' },
  { label: 'Александр', value: 'alexandr' },
  { label: 'Михаил', value: 'mihail' }
]

export const Basic: Story = {
  render: (args) => ({
    components: { RSelect },
    setup() {
      const value = ref('')

      return {
        args,
        value
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Значение: {{ value }}</p>

      <div style="width: 300px">
        <r-select v-bind="args" v-model="value" />
      </div>
    `
  }),
  args: {
    placeholder: 'Выберите значение...',
    options: options,
    disable: false
  }
}
