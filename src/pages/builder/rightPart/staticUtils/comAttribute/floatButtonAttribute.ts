import { ComAttribute } from "../attributeMap"
const floatButtonAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '设置按钮形状',
    value: 'shape',
    type: 'select',
    options: [
      {
        value: 'circle'
      },
      {
        value: 'round'
      }
    ],
    defaultValue: 'circle'
  },
  {
    label: '选择图标',
    value: 'type',
    type: 'modal',
    modalType: 'IconSelect'
  }
]

export {
  floatButtonAttribute
}