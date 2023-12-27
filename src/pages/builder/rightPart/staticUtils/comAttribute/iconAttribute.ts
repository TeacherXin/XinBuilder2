import { ComAttribute } from "../attributeMap"

const iconAttribute: ComAttribute[] = [
  {
    label: '图标旋转角度',
    value: 'rotate',
    type: 'number'
  },
  {
    label: '是否有旋转动画',
    value: 'spin',
    type: 'switch'
  },
  {
    label: '选择图标',
    value: 'type',
    type: 'modal',
    modalType: 'IconSelect'
  }
]

export {
  iconAttribute
}