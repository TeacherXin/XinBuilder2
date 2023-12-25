import { buttonAttribute } from './comAttribute/buttonAttribute'
import { inputAttribute } from './comAttribute/inputAttribute'

interface AttributeMap {
  [key: string]: ComAttribute[]
}

export interface ComAttribute {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string
}

const attributeMap: AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute
}

export {
  attributeMap
}