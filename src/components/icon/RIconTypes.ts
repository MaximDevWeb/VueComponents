export const RIconTypeArr = [
  'close',
  'angle-double-left',
  'angle-double-right',
  'angle-down',
  'angle-left',
  'angle-right',
  'angle-small-up',
  'apps-add',
  'apps-delete',
  'apps-sort',
  'apps',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'copy',
  'document',
  'envelope-plus',
  'envelope',
  'eye-crossed',
  'eye',
  'grid',
  'layers',
  'layout-fluid',
  'menu-burger',
  'menu-dots-vertical',
  'menu-dots',
  'picture',
  'plus-small',
  'refresh',
  'rotate-right',
  'settings-sliders',
  'settings',
  'sign-in-alt',
  'sign-out',
  'spinner-alt',
  'spinner',
  'tool-marquee',
  'trash',
  'user-add',
  'user-delete',
  'user-remove',
  'user',
  'zoom-in',
  'zoom-out'
] as const
export type RIconType = (typeof RIconTypeArr)[number]

export const RIconSizeArr = ['big', 'default', 'small'] as const
export type RIconSize = (typeof RIconSizeArr)[number]

export const RIconAnimateArr = ['none', 'rotate', 'flick'] as const
export type RIconAnimate = (typeof RIconAnimateArr)[number]
