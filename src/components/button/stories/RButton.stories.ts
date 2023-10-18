import type { Meta, StoryObj } from '@storybook/vue3'
import RButton from '@/components/button/RButton.vue'
import { RButtonSizeArr, RButtonTargetArr, RButtonTypeArr } from '@/components/button/RButtonTypes'
import RIcon from '@/App.vue'
import '@/assets/styles/app.scss'

const meta: Meta<typeof RButton> = {
  title: 'UI Element/Button',
  component: RButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      description: 'Внешний вид кнопки',
      options: RButtonTypeArr
    },
    target: {
      control: { type: 'select' },
      description: 'Тип кнопки',
      options: RButtonTargetArr
    },
    size: {
      control: { type: 'select' },
      description: 'Размер кнопки',
      options: RButtonSizeArr
    },
    load: {
      description: 'Состояние загрузки'
    },
    disable: {
      description: 'Неактивное состояние'
    }
  }
}

export default meta
type Story = StoryObj<typeof RButton>

export const Basic: Story = {
  render: (args) => ({
    components: { RButton },
    setup() {
      return { args }
    },
    template: '<RButton v-bind="args">Send Message</RButton>'
  }),
  args: {
    type: 'primary',
    target: 'button',
    size: 'default',
    load: false,
    disable: false
  }
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { RButton, RIcon },
    setup() {
      return { args }
    },
    template: '<RButton v-bind="args"><r-icon type="user-add" />Add User</RButton>'
  }),
  args: {
    type: 'primary-light',
    target: 'button',
    size: 'default',
    load: false,
    disable: false
  }
}

export const Icon: Story = {
  render: (args) => ({
    components: { RButton, RIcon },
    setup() {
      return { args }
    },
    template: '<RButton v-bind="args"><r-icon type="user-remove" /></RButton>'
  }),
  args: {
    type: 'danger-grey',
    target: 'button',
    size: 'default',
    load: false,
    disable: false
  }
}
