import { buttonAttribute } from './comAttribute/buttonAttribute'
import { cardAttribute } from './comAttribute/cardAttribute'
import { checkboxAttribute } from './comAttribute/checkboxAttribute'
import { formAttribute } from './comAttribute/formAttribute'
import { iconAttribute } from './comAttribute/iconAttribute'
import { inputAttribute } from './comAttribute/inputAttribute'
import { radioAttribute } from './comAttribute/radioAttribute'
import { rateAttribute } from './comAttribute/rateAttribute'
import { switchAttribute } from './comAttribute/switchAttribute'

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
  Rate: rateAttribute,
  Switch: switchAttribute,
  Form: formAttribute,
  Card: cardAttribute
}

export {
  attributeMap
}