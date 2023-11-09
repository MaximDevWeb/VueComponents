enum Messages {
  REQUIRED = 'Поле :field обязательно',
  MAX = 'Длина поля :field не более :max символов',
  MIN = 'Длина поля :field не менее :min символов'
}

enum Fields {
  LOGIN = 'логин',
  PASSWORD = 'пароль',
  PASSWORD_REPEAT = 'повторите пароль'
}

export class ValidationMessage {
  private static field = ''

  public static setField(field: string) {
    this.field = Fields[field.toUpperCase() as keyof typeof Fields]
    return this
  }

  /**
   * Сообщение об обязательном поле
   */
  public static REQUIRED(): string {
    return Messages.REQUIRED.replace(':field', this.field)
  }

  /**
   * Сообщение о максимальной длине поля
   * @param max
   */
  public static MAX(max: string | number): string {
    return Messages.MAX.replace(':field', this.field).replace(':max', max as string)
  }

  /**
   * Сообщение о минимальной длине поля
   * @param min
   */
  public static MIN(min: string | number): string {
    return Messages.MIN.replace(':field', this.field).replace(':min', min as string)
  }
}
