import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RTable from '@/components/table/RTable.vue'
import { type RTableColumn } from '@/components/table/RTableTypes'
import ColUserInfo from '@/components/table/columns/ColUserInfo.vue'
import ColUserRole from '@/components/table/columns/ColUserRole.vue'
import { shallowRef } from 'vue'

const meta: Meta<typeof RTable> = {
  component: RTable,
  title: 'Composition/Table',
  argTypes: {
    data: {
      control: { type: 'array' },
      description: 'Массив объектов для таблицы, должны содержать id'
    },
    perPage: {
      control: { type: 'number' },
      description: 'Количество элементов на странице'
    },
    columns: {
      control: { type: 'array' },
      description: 'Массив объектов с настройками колонок'
    }
  }
}

export type DataItem = {
  id: number
  login: string
  email: string
  telephone: string
  age: number
  role: string
  created_at: string
}

const data: DataItem[] = [
  {
    id: 1,
    login: 'user1',
    email: 'user1@example.com',
    telephone: '123-456-7890',
    age: 25,
    role: 'manager',
    created_at: '2023-11-14'
  },
  {
    id: 2,
    login: 'user2',
    email: 'user2@example.com',
    telephone: '234-567-8901',
    age: 30,
    role: 'admin',
    created_at: '2023-11-22'
  },
  {
    id: 3,
    login: 'user3',
    email: 'user3@example.com',
    telephone: '345-678-9012',
    age: 28,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 4,
    login: 'user4',
    email: 'user4@example.com',
    telephone: '456-789-0123',
    age: 32,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 5,
    login: 'user5',
    email: 'user5@example.com',
    telephone: '567-890-1234',
    age: 26,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 6,
    login: 'user6',
    email: 'user6@example.com',
    telephone: '678-901-2345',
    age: 31,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 7,
    login: 'user7',
    email: 'user7@example.com',
    telephone: '789-012-3456',
    age: 29,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 8,
    login: 'user8',
    email: 'user8@example.com',
    telephone: '890-123-4567',
    age: 27,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 9,
    login: 'user9',
    email: 'user9@example.com',
    telephone: '901-234-5678',
    age: 33,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 10,
    login: 'user10',
    email: 'user10@example.com',
    telephone: '012-345-6789',
    age: 34,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 11,
    login: 'user11',
    email: 'user11@example.com',
    telephone: '123-456-7890',
    age: 25,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 12,
    login: 'user12',
    email: 'user12@example.com',
    telephone: '234-567-8901',
    age: 30,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 13,
    login: 'user13',
    email: 'user13@example.com',
    telephone: '345-678-9012',
    age: 28,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 14,
    login: 'user14',
    email: 'user14@example.com',
    telephone: '456-789-0123',
    age: 32,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 15,
    login: 'user15',
    email: 'user15@example.com',
    telephone: '567-890-1234',
    age: 26,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 16,
    login: 'user16',
    email: 'user16@example.com',
    telephone: '678-901-2345',
    age: 31,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 17,
    login: 'user17',
    email: 'user17@example.com',
    telephone: '789-012-3456',
    age: 29,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 18,
    login: 'user18',
    email: 'user18@example.com',
    telephone: '890-123-4567',
    age: 27,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 19,
    login: 'user19',
    email: 'user19@example.com',
    telephone: '901-234-5678',
    age: 33,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 20,
    login: 'user20',
    email: 'user20@example.com',
    telephone: '012-345-6789',
    age: 34,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 21,
    login: 'user21',
    email: 'user21@example.com',
    telephone: '123-456-7890',
    age: 25,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 22,
    login: 'user22',
    email: 'user22@example.com',
    telephone: '234-567-8901',
    age: 30,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 23,
    login: 'user23',
    email: 'user23@example.com',
    telephone: '345-678-9012',
    age: 28,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 24,
    login: 'user24',
    email: 'user24@example.com',
    telephone: '456-789-0123',
    age: 32,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 25,
    login: 'user25',
    email: 'user25@example.com',
    telephone: '567-890-1234',
    age: 26,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 26,
    login: 'user26',
    email: 'user26@example.com',
    telephone: '678-901-2345',
    age: 31,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 27,
    login: 'user27',
    email: 'user27@example.com',
    telephone: '789-012-3456',
    age: 29,
    role: 'client',
    created_at: '2023-11-13'
  },
  {
    id: 28,
    login: 'user28',
    email: 'user28@example.com',
    telephone: '890-123-4567',
    age: 27,
    role: 'tutor',
    created_at: '2023-11-13'
  },
  {
    id: 29,
    login: 'user29',
    email: 'user29@example.com',
    telephone: '901-234-5678',
    age: 33,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 30,
    login: 'user30',
    email: 'user30@example.com',
    telephone: '012-345-6789',
    age: 34,
    role: 'admin',
    created_at: '2023-11-13'
  },
  {
    id: 31,
    login: 'user31',
    email: 'user31@example.com',
    telephone: '567-890-1234',
    age: 26,
    role: 'manager',
    created_at: '2023-11-13'
  },
  {
    id: 32,
    login: 'user32',
    email: 'user32@example.com',
    telephone: '678-901-2345',
    age: 31,
    role: 'admin',
    created_at: '2023-11-13'
  }
]

const dateTransform = (value: string) => {
  const date = new Date(value)
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

const columns: RTableColumn[] = [
  { field: 'login', label: 'Логин', component: shallowRef(ColUserInfo), selectable: true },
  { field: 'telephone', label: 'Телефон' },
  { field: 'age', label: 'Возраст', sortable: true },
  { field: 'role', label: 'Роль', component: shallowRef(ColUserRole), sortable: true },
  { field: 'created_at', label: 'Добавлен', transform: dateTransform }
]

export default meta
type Story = StoryObj<typeof RTable>

export const Basic: Story = {
  render: (args) => ({
    components: { RTable },
    setup() {
      return {
        args
      }
    },
    template: `
      <div>
        <r-table v-bind="args" />
      </div>
    `
  }),
  args: {
    data: data,
    perPage: 10,
    columns: columns
  }
}
