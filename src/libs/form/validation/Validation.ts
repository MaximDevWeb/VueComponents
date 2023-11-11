import type { ValidationErrors, ValidationRules } from '@/libs/form'
import { Rule } from '@/libs/form/validation/ValidationRules'

export class Validation {
  private readonly errors: ValidationErrors
  private rules: ValidationRules[] = []
  private field: string = ''

  /**
   * Конструктор класса
   */
  constructor() {
    this.errors = {}
  }

  /**
   * Устанавливаем имя поля проверки
   * @param field
   */
  public setField(field: string) {
    this.field = field
    return this
  }

  /**
   * Устанавливаем массив правил проверки
   * @param rules
   */
  public setRules(rules: ValidationRules[]) {
    this.rules = rules
    return this
  }

  /**
   * Проводим проверку значения
   * @param value
   */
  public valid(value: string | boolean) {
    this.rules.some((rule: ValidationRules) => {
      const result = new Rule().setRule(rule).check(this.field, value)

      if (result) {
        this.errors[this.field] = result as string
        return true
      }
    })
  }

  /**
   * Проверяем наличие ошибок
   */
  public isErrors(): boolean {
    return !!Object.entries(this.errors).length
  }

  /**
   * Возвращаем массив ошибок
   */
  public getErrors() {
    return this.errors
  }
}
