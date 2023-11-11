import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RAlert from '@/components/alert/RAlert.vue'
import { RAlertTypeArr } from '@/components/alert/RAlertTypes'

const meta: Meta<typeof RAlert> = {
  title: 'UI Element/Alert',
  component: RAlert,
  argTypes: {
    type: {
      control: { type: 'select' },
      description: 'Тип оповещения',
      options: RAlertTypeArr
    },
    title: {
      control: { type: 'text' },
      description: 'Заголовок оповещения'
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Наличие рамки'
    },
    sideBar: {
      control: { type: 'boolean' },
      description: 'Наличие левой рамки'
    }
  }
}

export default meta
type Story = StoryObj<typeof RAlert>

export const Basic: Story = {
  render: (args) => ({
    components: { RAlert },
    setup() {
      return {
        args
      }
    },

    template: `
      <div style="width: 350px">
        <r-alert v-bind="args">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla.</r-alert>
      </div>
    `
  }),
  args: {
    type: 'default',
    title: 'Title alert',
    bordered: false,
    sideBar: false
  }
}
