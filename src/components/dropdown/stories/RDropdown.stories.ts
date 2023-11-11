import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RDropdown from '@/components/dropdown/RDropdown.vue'
import RDropdownHeader from '@/components/dropdown/RDropdownHeader.vue'
import RDropdownBlock from '@/components/dropdown/RDropdownBlock.vue'
import RDropdownItem from '@/components/dropdown/RDropdownItem.vue'
import RDropdownMarker from '@/components/dropdown/RDropdownMarker.vue'
import RButton from '@/components/button/RButton.vue'
import RIcon from '@/components/icon/RIcon.vue'

const meta: Meta<typeof RDropdown> = {
  title: 'UI Element/Dropdown',
  component: RDropdown,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof RDropdown>

export const Basic: Story = {
  render: (args) => ({
    components: { RDropdown, RButton, RDropdownHeader, RDropdownBlock, RDropdownItem },
    setup() {
      return { args }
    },
    template: `
      <r-dropdown>
        <template #target>
          <r-button>Профиль</r-button>
        </template>

        <template #list>
          <r-dropdown-block>
            <r-dropdown-header>Управление</r-dropdown-header>
            <r-dropdown-item>Сменить пароль</r-dropdown-item>
            <r-dropdown-item>Сменить логин</r-dropdown-item>
            <r-dropdown-item>Выйти</r-dropdown-item>
          </r-dropdown-block>
        </template>
      </r-dropdown>
    `
  })
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { RDropdown, RButton, RDropdownBlock, RDropdownItem, RIcon },
    setup() {
      return { args }
    },
    template: `
        <r-dropdown>
          <template #target>
            <r-button>Профиль</r-button>
          </template>

          <template #list>
            <r-dropdown-block>
              <r-dropdown-item>
                <r-icon type="settings" /> Сменить пароль
              </r-dropdown-item>
              <r-dropdown-item>
                <r-icon type="settings-sliders" /> Сменить логин
              </r-dropdown-item>
              <r-dropdown-item>
                <r-icon type="sign-out" /> Выйти
              </r-dropdown-item>
            </r-dropdown-block>
          </template>
        </r-dropdown>
    `
  })
}

export const WithChildren: Story = {
  render: (args) => ({
    components: {
      RDropdown,
      RButton,
      RDropdownBlock,
      RDropdownItem,
      RDropdownHeader,
      RDropdownMarker
    },
    setup() {
      return { args }
    },
    template: `
      <div style="min-height: 400px">
        <r-dropdown>
          <template #target>
            <r-button>Настройки</r-button>
          </template>

          <template #list>
            <r-dropdown-block>
              <r-dropdown-item>Настройки</r-dropdown-item>

              <r-dropdown-marker target="document"> Документы </r-dropdown-marker>
              <r-dropdown-block id="document">
                <r-dropdown-marker target="default">Общие</r-dropdown-marker>
                <r-dropdown-block id="default">
                  <r-dropdown-item>Сменить пароль</r-dropdown-item>
                  <r-dropdown-item>Сменить логин</r-dropdown-item>
                  <r-dropdown-item>Выйти</r-dropdown-item>
                </r-dropdown-block>

                <r-dropdown-item>Дополнительные</r-dropdown-item>
              </r-dropdown-block>

              <r-dropdown-item>Оповещения</r-dropdown-item>
            </r-dropdown-block>

            <r-dropdown-block>
              <r-dropdown-header>Авторизация</r-dropdown-header>
              <r-dropdown-item>Сменить пароль</r-dropdown-item>
              <r-dropdown-item>Сменить логин</r-dropdown-item>
              <r-dropdown-item>Выйти</r-dropdown-item>
            </r-dropdown-block>
          </template>
        </r-dropdown>
      </div>
    `
  })
}
