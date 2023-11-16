import type { Component } from 'vue'

export type RTableColumn = {
  field: string
  label?: string
  width?: string
  sortable?: boolean
  selectable?: boolean
  component?: Component
  transform?: Function
}

export enum RTableDirection {
  UP,
  DOWN,
  NOT
}

export type RTableItem = {
  id: number
  [field: string]: any
}
