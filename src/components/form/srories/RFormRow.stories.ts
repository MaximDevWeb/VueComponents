import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RFormRow from '@/components/form/RFormRow.vue'
import RInput from '@/components/input/RInput.vue'

const meta: Meta<typeof RFormRow> = {
  component: RFormRow,
  title: 'Composition/FormRow',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Метка поля'
    },
    info: {
      control: { type: 'text' },
      description: 'Информационная подпись'
    },
    error: {
      control: { type: 'text' },
      description: 'Сообщение об ошибке'
    }
  }
}

export default meta
type Story = StoryObj<typeof RFormRow>

export const Basic: Story = {
  render: (args) => ({
    components: { RFormRow, RInput },
    setup() {
      return {
        args
      }
    },
    template: `
      <div style="width: 350px;">
        <r-form-row v-bind="args">
          <r-input placeholder="yoda" />
        </r-form-row>
      </div>
    `
  }),
  args: {
    label: 'Логин',
    info: 'Это логин будет использоваться при входе',
    error: ''
  }
}
