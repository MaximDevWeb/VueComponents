import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import { ref } from 'vue'
import RPassword from '@/components/input/RPassword.vue'

const meta: Meta<typeof RPassword> = {
  component: RPassword,
  title: 'Form/Password',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Заполнитель поля'
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
type Story = StoryObj<typeof RPassword>

export const Basic: Story = {
  render: (args) => ({
    components: { RPassword },
    setup() {
      const value = ref('')

      return {
        args,
        value
      }
    },
    template: `
      <div style="margin-bottom: 10px">Пароль: {{ value }}</div>

      <div style="width: 300px">
        <r-password v-model="value" v-bind="args"/>
      </div>
    `
  }),
  args: {
    placeholder: 'Введите текст',
    disable: false
  }
}
