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

export type RTableSort = {
  field: string
  direction: 'up' | 'down' | 'not'
}
