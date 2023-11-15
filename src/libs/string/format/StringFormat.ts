export class StringFormat {
  /**
   * Преобразует первый символ строки
   * в верхний регистр
   * @param string
   */
  public static capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
