import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RTooltip from '@/components/tooltip/RTooltip.vue'
import { RTooltipModeArray, RTooltipPositionArray } from '@/components/tooltip/RTooltipTipes'

const meta: Meta<typeof RTooltip> = {
  title: 'UI Element/Tooltip',
  component: RTooltip,
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Основное содержимое'
    },
    title: {
      control: { type: 'text' },
      description: 'Заголовок'
    },
    mode: {
      control: { type: 'radio' },
      description: 'Внешний вид',
      options: RTooltipModeArray
    },
    position: {
      control: { type: 'select' },
      description: 'Позиция',
      options: RTooltipPositionArray
    }
  }
}

export default meta
type Story = StoryObj<typeof RTooltip>

export const Basic: Story = {
  render: (args) => ({
    components: { RTooltip },
    setup() {
      return { args }
    },
    template: `
      <p style="margin: 50px 0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque delectus, ea earum
        enim fuga iusto quam <r-tooltip v-bind="args"> quisquam repudiandae voluptatibus.</r-tooltip> At delectus, doloribus est itaque laboriosam odit recusandae voluptatibus. Quas?
      </p>
    `
  }),
  args: {
    content: 'At delectus, doloribus est itaque laboriosam odit recusandae voluptatibus.',
    title: '',
    mode: 'default',
    position: 'top'
  }
}
