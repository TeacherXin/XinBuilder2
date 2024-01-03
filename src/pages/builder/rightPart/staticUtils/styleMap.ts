import { alertStyle } from "./comStyle/alertStyle"
import { buttonStyle } from "./comStyle/buttonStyle"
import { cardStyle } from "./comStyle/cardStyle"
import { floatButtonStyle } from "./comStyle/floatButtonStyle"
import { formStyle } from "./comStyle/formStyle"
import { iconStyle } from "./comStyle/iconStyle"
import { inputStyle } from "./comStyle/inputStyle"

interface StyleMap {
  [key: string]: Style[]
}

export interface Style {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string,
  modalType?: string
}

const styleMap: StyleMap = {
  Button: buttonStyle,
  Form: formStyle,
  Icon: iconStyle,
  Input: inputStyle,
  Card: cardStyle,
  FloatButton: floatButtonStyle,
  Alert: alertStyle
}

export {
  styleMap
}