export const RSwitchModeArr = ['default', 'dark'] as const
export type RSwitchMode = (typeof RSwitchModeArr)[number]
