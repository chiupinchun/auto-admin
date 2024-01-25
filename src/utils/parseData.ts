/**
 * 返回data[key]，其中data和key為接收的參數。當key包含點時，返回對象的深層屬性。
 * 
 * ex:
 * 
 * parseTableCeil({ a: 123 }, 'a') // return 123
 * 
 * parseTableCeil({ a: { b: { c: 123 } } }, 'a.b.c') // return 123
 */
export const parseTableCeil = (
  data: Record<string, unknown>,
  key: string,
  rule?: (raw: unknown) => unknown
): unknown => {
  let ceilOrInfo: any
  if (key.includes('.')) {
    const keys = key.split('.')
    for (let i = 0; i < keys.length; i++) {
      ceilOrInfo = ceilOrInfo ?? data
      if (ceilOrInfo[keys[i]] !== undefined) {
        ceilOrInfo = ceilOrInfo[keys[i]]
      }
      else {
        ceilOrInfo = undefined
      }
    }
  } else { ceilOrInfo = data[key] }

  // TODO: parse info to ceil

  return rule ? rule(ceilOrInfo) : ceilOrInfo
}