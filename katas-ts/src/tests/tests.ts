// Goal: prove that arguments in Javascript are "passed by sharing"

export interface Data {
  prop1: string
  prop2: boolean
  prop3: number
}

export function editDataArray(datas: Data[], editFunc: (_: Data) => void): void {
  datas.forEach((data) => editFunc(data))
}

export function editDataRecord(datas: Record<string, Data>, editFunc: (_: Data) => void): void {
  Object.values(datas).forEach((data) => editFunc(data))
}

export function editData(data: Data): void {
  data.prop1 += 'Z'
  data.prop2 = !data.prop2
  data.prop3 += 1
}
