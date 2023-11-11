import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RForm from '@/components/form/RForm.vue'
import { reactive, ref } from 'vue'
import type { ValidationData, ValidationErrors } from '@/libs/form'
import RFormRow from '@/components/form/RFormRow.vue'
import RInput from '@/components/input/RInput.vue'
import RPassword from '@/components/input/RPassword.vue'
import RButton from '@/components/button/RButton.vue'

const meta: Meta<typeof RForm> = {
  component: RForm,
  title: 'Composition/Form',
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Данные для отправки'
    },
    validation: {
      control: { type: 'object' },
      description: 'Данные для валидации'
    }
  }
}

const data = reactive({
  login: '',
  password: '',
  password_repeat: ''
})

const validation: ValidationData[] = [
  { field: 'login', rules: ['required'] },
  { field: 'password', rules: ['required', 'min:8'] },
  { field: 'password_repeat', rules: ['required', 'min:8'] }
]

export default meta
type Story = StoryObj<typeof RForm>

export const Basic: Story = {
  render: (args) => ({
    components: { RForm, RFormRow, RInput, RPassword, RButton },
    setup() {
      const errors = ref<ValidationErrors>({})

      const errorsHandler = (list: ValidationErrors) => {
        errors.value = list
      }

      return {
        args,
        errors,
        errorsHandler
      }
    },
    template: `
      <div style="width: 350px">
        <r-form v-bind="args" @errors="errorsHandler">
          <r-form-row label="Логин" :error="errors.login">
            <r-input placeholder="Введите логин" v-model="args.data.login" />
          </r-form-row>

          <r-form-row label="Пароль" :error="errors.password">
            <r-password placeholder="Введите пароль" v-model="args.data.password" />
          </r-form-row>

          <r-form-row label="Повторите пароль" :error="errors.password_repeat">
            <r-password placeholder="Введите пароль" v-model="args.data.password_repeat" />
          </r-form-row>

          <r-button target="submit">Отправить</r-button>
        </r-form>
      </div>
    `
  }),
  args: {
    data: data,
    validation: validation
  }
}
