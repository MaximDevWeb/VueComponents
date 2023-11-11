import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RBoxGroup from '@/components/box_group/RBoxGroup.vue'
import type { RBoxGroupItem } from '@/components/box_group/RBoxGroupTypes'
import RIcon from '@/components/icon/RIcon.vue'
import avatar from '@/assets/images/avatar.jpeg'
import avatar2 from '@/assets/images/avatar_2.webp'
import avatar3 from '@/assets/images/avatar_3.jpeg'
import { ref } from 'vue'
import {
  RBoxGroupGridArray,
  RBoxGroupPositionArray,
  RBoxGroupTypeArray
} from '@/components/box_group/RBoxGroupTypes'

const meta: Meta<typeof RBoxGroup> = {
  title: 'Form/BoxGroup',
  component: RBoxGroup,
  argTypes: {
    type: {
      control: { type: 'radio' },
      description: 'Тип группы',
      options: RBoxGroupTypeArray
    },
    position: {
      control: { type: 'radio' },
      description: 'Позиция input элемента',
      options: RBoxGroupPositionArray
    },
    list: {
      control: { type: 'object' },
      description: 'Список элементов'
    },
    grid: {
      control: { type: 'select' },
      description: 'Количество элементов в ряду',
      options: RBoxGroupGridArray
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
type Story = StoryObj<typeof RBoxGroup>

const basicValues: RBoxGroupItem[] = [
  {
    value: 'first',
    title: 'Первый блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil.'
  },
  {
    value: 'two',
    title: 'Второй блок',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id libero maxime praesentium.'
  },
  {
    value: 'three',
    title: 'Третий блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]

const iconValues: RBoxGroupItem[] = [
  {
    value: 'first',
    title: 'Первый блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil.',
    icon: {
      component: RIcon,
      args: { type: 'document' }
    }
  },
  {
    value: 'two',
    title: 'Второй блок',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id libero maxime praesentium.',
    icon: {
      component: RIcon,
      args: { type: 'picture' }
    }
  },
  {
    value: 'three',
    title: 'Третий блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    icon: {
      component: RIcon,
      args: { type: 'layers' }
    }
  }
]

const imageValues: RBoxGroupItem[] = [
  {
    value: 'first',
    title: 'Первый блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil.',
    image: avatar
  },
  {
    value: 'two',
    title: 'Второй блок',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id libero maxime praesentium.',
    image: avatar2
  },
  {
    value: 'three',
    title: 'Третий блок',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: avatar3
  }
]

export const Basic: Story = {
  render: (args) => ({
    components: { RBoxGroup },
    setup() {
      const value = ref([])

      return {
        value,
        args
      }
    },

    template: `
      <div style="margin-bottom: 10px">Значение: {{ value }}</div>
      <r-box-group v-bind="args" v-model="value" />
    `
  }),
  args: {
    type: 'checkbox',
    position: 'start',
    list: basicValues,
    grid: 4,
    disable: false
  }
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { RBoxGroup },
    setup() {
      const value = ref([])

      return {
        value,
        args
      }
    },

    template: `
      <div style="margin-bottom: 10px">Значение: {{ value }}</div>
      <r-box-group v-bind="args" v-model="value" />
    `
  }),
  args: {
    type: 'radio',
    position: 'end',
    list: iconValues,
    grid: 4,
    disable: false
  }
}

export const WithImage: Story = {
  render: (args) => ({
    components: { RBoxGroup },
    setup() {
      const value = ref([])

      return {
        value,
        args
      }
    },

    template: `
      <div style="margin-bottom: 10px">Значение: {{ value }}</div>
      <r-box-group v-bind="args" v-model="value" />
    `
  }),
  args: {
    type: 'radio',
    position: 'end',
    list: imageValues,
    grid: 4,
    disable: false
  }
}
