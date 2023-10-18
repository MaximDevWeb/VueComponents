import type { Meta, StoryObj } from '@storybook/vue3'
import RCheckbox from '@/components/checkbox/RCheckbox.vue'
import { ref } from 'vue'
import '@/assets/styles/app.scss'

const meta: Meta<typeof RCheckbox> = {
  title: 'Form/Checkbox',
  component: RCheckbox,
  argTypes: {
    value: {
      control: false,
      description: 'Значение (используется для выборки нескольких данных)',
      controls: ''
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
type Story = StoryObj<typeof RCheckbox>

export const Basic: Story = {
  render: (args) => ({
    components: { RCheckbox },
    setup() {
      const visible = ref(false)
      return {
        args,
        visible
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Показать: {{ visible }}</p>
      <r-checkbox v-model="visible" v-bind="args">Показать</r-checkbox>
    `
  }),
  args: {
    value: '',
    disable: false
  }
}

export const WithArray: Story = {
  render: (args) => ({
    components: { RCheckbox },
    setup() {
      const list = ref([])
      return {
        args,
        list
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Список: {{ list }}</p>
      
      <div style="display:flex; gap: 10px">
        <r-checkbox v-model="list" v-bind="args" value="Иван">Иван</r-checkbox>
        <r-checkbox v-model="list" v-bind="args" value="Петр">Петр</r-checkbox>
        <r-checkbox v-model="list" v-bind="args" value="Сергей">Сергей</r-checkbox>
      </div>
    `
  }),
  args: {
    value: '',
    disable: false
  }
}
