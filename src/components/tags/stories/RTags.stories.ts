import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RTags from '@/components/tags/RTags.vue'
import { ref } from 'vue'

const meta: Meta<typeof RTags> = {
  title: 'Form/Tags',
  component: RTags,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Текст заполнителя'
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
type Story = StoryObj<typeof RTags>

export const Basic: Story = {
  render: (args) => ({
    components: { RTags },
    setup() {
      const values = ref([])

      return {
        args,
        values
      }
    },
    template: `
      <p style="margin-bottom: 10px;">Значения: {{ values }}</p>

      <div style="width: 300px">
        <r-tags v-bind="args" v-model="values" />
      </div>
    `
  }),
  args: {
    placeholder: 'Введите и нажмите ввод',
    disable: false
  }
}
