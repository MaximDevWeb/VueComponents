import RButton from '@/components/button/RButton.vue'

export const RButtonTargetArr = ['button', 'submit', 'reset'] as const
export type RButtonTarget = (typeof RButtonTargetArr)[number]

export const RButtonTypeArr = [
  'primary',
  'primary-light',
  'secondary',
  'secondary-gray',
  'tertiary',
  'danger',
  'danger-light',
  'danger-grey',
  'danger-white'
] as const
export type RButtonType = (typeof RButtonTypeArr)[number]

export const RButtonSizeArr = ['big', 'default', 'small'] as const
export type RButtonSize = (typeof RButtonSizeArr)[number]
