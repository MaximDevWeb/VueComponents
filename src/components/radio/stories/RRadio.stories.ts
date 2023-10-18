import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RRadio from '@/components/radio/RRadio.vue'
import { ref } from 'vue'

const meta: Meta<typeof RRadio> = {
  title: 'Form/Radio',
  component: RRadio,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Значение элемента'
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
type Story = StoryObj<typeof RRadio>

export const Basic: Story = {
  render: (args) => ({
    components: { RRadio },
    setup() {
      const value = ref('')

      return {
        args,
        value
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Значение: {{ value }}</p>

      <div style="display:flex; gap: 10px">
        <r-radio v-bind="args" value="Иван" v-model="value">Иван</r-radio>
        <r-radio v-bind="args" value="Сергей" v-model="value">Сергей</r-radio>
        <r-radio v-bind="args" value="Александр" v-model="value">Александр</r-radio>
      </div>
    `
  }),
  args: {
    value: '',
    disable: false
  }
}
