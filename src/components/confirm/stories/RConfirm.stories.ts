import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RConfirm from '@/components/confirm/RConfirm.vue'
import RButton from '@/components/button/RButton.vue'

const meta: Meta<typeof RConfirm> = {
  title: 'Composition/Confirm',
  component: RConfirm,
  argTypes: {
    header: {
      control: { type: 'text' },
      description: 'Заголовок'
    },
    subHeader: {
      control: { type: 'text' },
      description: 'Подзаголовок'
    },
    event: {
      description: 'Действие которое нужно подтвердить'
    }
  }
}

export default meta
type Story = StoryObj<typeof RConfirm>

export const Basic: Story = {
  render: (args) => ({
    components: { RConfirm, RButton },
    setup() {
      return {
        args
      }
    },
    template: `
      <div style="min-height: 300px">
        <r-confirm v-bind="args">
          <r-button type="danger">Удалить</r-button>
        </r-confirm>
      </div>
    `
  }),
  args: {
    header: 'Подтвердите удаление',
    subHeader: 'Вы уверены что хотите удалить элемент',
    event: () => {
      console.log('Confirmed')
    }
  }
}
