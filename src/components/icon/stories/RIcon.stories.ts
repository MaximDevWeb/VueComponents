import type { Meta, StoryObj } from '@storybook/vue3'

import RIcon from '@/components/icon/RIcon.vue'
import { RIconAnimate, RIconSize, RIconType } from '@/components/icon/RIconTypes'

const meta: Meta<typeof RIcon> = {
  title: 'UI Element/Icon',
  component: RIcon,
  argTypes: {
    type: {
      control: { type: 'select' },
      description: 'Тип иконки.',
      options: RIconType
    },
    size: {
      control: { type: 'radio' },
      description: 'Размер иконки.',
      options: RIconSize
    },
    animate: {
      control: { type: 'radio' },
      description: 'Анимация иконки',
      options: RIconAnimate
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
    type: RIconType.APPS,
    size: RIconSize.DEFAULT,
    animate: RIconAnimate.NONE
  }
}
