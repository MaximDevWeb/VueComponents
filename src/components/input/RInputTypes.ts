export const RInputTypeArray = [
  'color',
  'date',
  'email',
  'tel',
  'month',
  'text',
  'time',
  'url',
  'week'
] as const

export type RInputType = (typeof RInputTypeArray)[number]
export type RPasswordType = 'password' | 'text'
