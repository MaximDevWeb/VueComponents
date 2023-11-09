export type ValidationRules = 'required' | `max:${number}` | `min:${number}`

export type ValidationData = {
  field: string
  rules: ValidationRules[]
}

export type ValidationErrors = {
  [field: string]: string
}
