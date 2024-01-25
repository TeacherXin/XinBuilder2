import { alertAttribute } from './comAttribute/alertAttribute'
import { avatarAttribute } from './comAttribute/avatarAttribute'
import { badgeAttribute } from './comAttribute/badgeAttribute'
import { buttonAttribute } from './comAttribute/buttonAttribute'
import { cardAttribute } from './comAttribute/cardAttribute'
import { carouselAttribute } from './comAttribute/carouselAttribute'
import { checkboxAttribute } from './comAttribute/checkboxAttribute'
import { floatButtonAttribute } from './comAttribute/floatButtonAttribute'
import { formAttribute } from './comAttribute/formAttribute'
import { iconAttribute } from './comAttribute/iconAttribute'
import { inputAttribute } from './comAttribute/inputAttribute'
import { progressAttribute } from './comAttribute/progressAttribute'
import { qrcodeAttribute } from './comAttribute/qrcodeAttribute'
import { radioAttribute } from './comAttribute/radioAttribute'
import { rateAttribute } from './comAttribute/rateAttribute'
import { switchAttribute } from './comAttribute/switchAttribute'
import { tagAttribute } from './comAttribute/tagAttribute'
import { uploadAttribute } from './comAttribute/uploadAttribute'

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
  Card: cardAttribute,
  FloatButton: floatButtonAttribute,
  Alert: alertAttribute,
  Progress: progressAttribute,
  QRCode: qrcodeAttribute,
  Tag: tagAttribute,
  Avatar: avatarAttribute,
  Badge: badgeAttribute,
  Carousel: carouselAttribute,
  Upload: uploadAttribute
}

export {
  attributeMap
}