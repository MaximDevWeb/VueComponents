import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RCode from '@/components/code/RCode.vue'
import { ref } from 'vue'

const meta: Meta<typeof RCode> = {
  title: 'Form/Code',
  component: RCode,
  argTypes: {
    length: {
      control: { type: 'number' },
      description: 'Длина поля кода'
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
type Story = StoryObj<typeof RCode>

export const Basic: Story = {
  render: (args) => ({
    components: { RCode },
    setup() {
      const code = ref('')

      return {
        args,
        code
      }
    },
    template: `
      <p style="margin-bottom: 10px">Код: {{ code }}</p>
      <r-code v-bind="args" v-model="code" />
    `
  }),
  args: {
    length: 6,
    disable: false
  }
}
