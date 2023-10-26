import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RPagination from '@/components/pagination/RPagination.vue'
import { ref } from 'vue'
import { RPaginationTypeArray } from '@/components/pagination/RPaginationTypes'

const meta: Meta<typeof RPagination> = {
  title: 'UI Element/Pagination',
  component: RPagination,
  argTypes: {
    count: {
      control: { type: 'number' },
      description: 'Количество элементов'
    },
    perPage: {
      control: { type: 'number' },
      description: 'Элементов на странице'
    },
    type: {
      control: { type: 'radio' },
      description: 'Тип навигации',
      options: RPaginationTypeArray
    },
    short: {
      control: { type: 'boolean' },
      description: 'Сокращенная форма'
    },
    modelValue: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof RPagination>

export const Basic: Story = {
  render: (args) => ({
    components: { RPagination },
    setup() {
      const page = ref(1)

      return {
        args,
        page
      }
    },
    template: `
      <p style="margin-bottom: 10px">Страница: {{ page }}</p>
      <r-pagination v-bind="args" v-model="page" />
    `
  }),
  args: {
    count: 350,
    type: 'default',
    perPage: 20,
    short: false
  }
}
