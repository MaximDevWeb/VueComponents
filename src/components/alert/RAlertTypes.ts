export const RAlertTypeArr = ['default', 'error', 'info', 'success', 'warning'] as const
export type RAlertType = (typeof RAlertTypeArr)[number]
