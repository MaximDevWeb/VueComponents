export const RPaginationTypeArray = ['default', 'round'] as const
export type RPaginationType = (typeof RPaginationTypeArray)[number]

export enum RPaginationDirections {
  PREV = 'prev',
  NEXT = 'next'
}
