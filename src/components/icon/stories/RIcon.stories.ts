import type { Meta, StoryObj } from '@storybook/vue3'
import RIcon from '@/components/icon/RIcon.vue'
import { RIconAnimateArr, RIconSizeArr, RIconTypeArr } from '@/components/icon/RIconTypes'
import '@/assets/styles/app.scss'

const meta: Meta<typeof RIcon> = {
  title: 'UI Element/Icon',
  component: RIcon,
  argTypes: {
    type: {
      control: { type: 'select' },
      description: 'Тип иконки.',
      options: RIconTypeArr
    },
    size: {
      control: { type: 'radio' },
      description: 'Размер иконки.',
      options: RIconSizeArr
    },
    animate: {
      control: { type: 'radio' },
      description: 'Анимация иконки',
      options: RIconAnimateArr
    }
  }
}

export default meta
type Story = StoryObj<typeof RIcon>

export const Basic: Story = {
  render: (args) => ({
    components: { RIcon },
    setup() {
      return { args }
    },
    template: '<RIcon v-bind="args"></RIcon>'
  }),
  args: {
    type: 'apps',
    size: 'default',
    animate: 'none'
  }
}
