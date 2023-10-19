import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RSwitch from '@/components/switch/RSwitch.vue'
import { ref } from 'vue'
import { RSwitchModeArr } from '@/components/switch/RSwitchTypes'

const meta: Meta<typeof RSwitch> = {
  title: 'Form/Switch',
  component: RSwitch,
  argTypes: {
    mode: {
      control: { type: 'radio' },
      description: 'Стиль переключателя',
      options: RSwitchModeArr
    },
    small: {
      control: { type: 'boolean' },
      description: 'Маленький размер'
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
type Story = StoryObj<typeof RSwitch>

export const Basic: Story = {
  render: (args) => ({
    components: { RSwitch },
    setup() {
      const value = ref(false)

      return {
        args,
        value
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Активировано: {{ value }}</p>
      
      <r-switch v-bind="args">Активировать</r-switch>
    `
  }),
  args: {
    mode: 'default',
    small: false,
    disable: false
  }
}
