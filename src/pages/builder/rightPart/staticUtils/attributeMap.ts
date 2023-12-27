import { buttonAttribute } from './comAttribute/buttonAttribute'
import { checkboxAttribute } from './comAttribute/checkboxAttribute'
import { iconAttribute } from './comAttribute/iconAttribute'
import { inputAttribute } from './comAttribute/inputAttribute'

interface AttributeMap {
  [key: string]: ComAttribute[]
}

export interface ComAttribute {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string,
  modalType?: string
}

const attributeMap: AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute,
  Icon: iconAttribute,
  Checkbox: checkboxAttribute
}

export {
  attributeMap
}