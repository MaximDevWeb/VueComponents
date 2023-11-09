import { ValidationMessage } from '@/libs/form/validation/ValidationMessage'

export class Rule {
  private rule = ''
  private param = ''

  /**
   * Устанавливаем значение правила
   * @param ruleData
   */
  public setRule(ruleData: string) {
    const [rule, param] = ruleData.split(':')

    this.rule = rule
    this.param = param

    return this
  }

  /**
   * Проверяем соответствие значения поля правилу
   * @param field
   * @param value
   */
  public check(field: string, value: string | boolean): boolean | string {
    return this[this.rule as keyof Rule](field, value) as boolean | string
  }

  /**
   * Проверка значения на пустоту
   * @param field - имя поля
   * @param value - значение поля
   */
  private required(field: string, value: string | boolean): boolean | string {
    if (value || (value as String).trim().length !== 0) {
      return false
    }

    return ValidationMessage.setField(field).REQUIRED()
  }

  /**
   * Проверка на максимальную длину
   * @param field
   * @param value
   */
  private max(field: string, value: string): boolean | string {
    if (value.trim().length < Number(this.param)) {
      return false
    }

    return ValidationMessage.setField(field).MAX(this.param)
  }

  /**
   * Проверка на минимальную длину
   * @param field
   * @param value
   */
  private min(field: string, value: string): boolean | string {
    if (value.trim().length > Number(this.param)) {
      return false
    }

    return ValidationMessage.setField(field).MIN(this.param)
  }
}
