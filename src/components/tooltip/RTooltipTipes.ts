export const RTooltipModeArray = ['default', 'dark'] as const
export type RTooltipMode = (typeof RTooltipModeArray)[number]

export const RTooltipPositionArray = ['top', 'right', 'bottom', 'left']
export type RTooltipPosition = (typeof RTooltipPositionArray)[number]
