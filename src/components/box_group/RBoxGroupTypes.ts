export const RBoxGroupTypeArray = ['checkbox', 'radio'] as const
export type RBoxGroupType = (typeof RBoxGroupTypeArray)[number]

export const RBoxGroupPositionArray = ['start', 'end'] as const
export type RBoxGroupPosition = (typeof RBoxGroupPositionArray)[number]

export const RBoxGroupGridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
export type RBoxGroupGrid = (typeof RBoxGroupGridArray)[number]

export type RBoxGroupItem = {
  value: string | number
  title: string
  content: string
  icon?: {
    component: any
    args: any
  }
  image?: string
}

export type RBoxGroupValue = string | number | string[] | number[]
