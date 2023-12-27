import { buttonAttribute } from './comAttribute/buttonAttribute'
import { checkboxAttribute } from './comAttribute/checkboxAttribute'
import { iconAttribute } from './comAttribute/iconAttribute'
import { inputAttribute } from './comAttribute/inputAttribute'
import { radioAttribute } from './comAttribute/radioAttribute'
import { rateAttribute } from './comAttribute/rateAttribute'

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
  Checkbox: checkboxAttribute,
  Radio: radioAttribute,
  Rate: rateAttribute
}

export {
  attributeMap
}