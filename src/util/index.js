export const moneyFormatter = (value) => {
  return new Intl.NumberFormat().format(plainNumber(value))
}
export const plainNumber = (value) => {
  if (!value || isNaN(Number(value))) return 0

  if (typeof value === 'string') return +value.replace(/[^0-9]/g, '')

  if (typeof value === 'number') return +value.toString().replace(/[^0-9]/g, '')
}
