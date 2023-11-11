import type { Meta, StoryObj } from '@storybook/vue3'
import '@/assets/styles/app.scss'
import RModal from '@/components/modal/RModal.vue'
import RButton from '@/components/button/RButton.vue'
import { ref } from 'vue'
import RModalHead from '@/components/modal/RModalHead.vue'
import RModalContent from '@/components/modal/RModalContent.vue'
import RModalBottom from '@/components/modal/RModalBottom.vue'

const meta: Meta<typeof RModal> = {
  title: 'UI Element/Modal',
  component: RModal,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Состояние открытия модального окна'
    }
  }
}

export default meta
type Story = StoryObj<typeof RModal>

export const Basic: Story = {
  render: (args) => ({
    components: { RModal, RButton, RModalHead, RModalContent, RModalBottom },
    setup() {
      const openModal = ref<boolean>(false)

      return {
        args,
        openModal
      }
    },
    template: `
      <r-button @click="args.open = true">Открыть</r-button>

      <r-modal v-bind="args" @close="args.open = false">
        <r-modal-head>Подтверждение учетной записи учетной</r-modal-head>

        <r-modal-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, officiis.
        </r-modal-content>

        <r-modal-bottom>
          <r-button>Принять</r-button>
          <r-button type="danger-light" @click="args.open = false">Отмена</r-button>
        </r-modal-bottom>
      </r-modal>
    `
  }),
  args: {
    open: false
  }
}
