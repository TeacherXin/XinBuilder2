import { ComAttribute } from "../attributeMap"

const switchAttribute: ComAttribute[] = [
  {
    label: '组件大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'default'
      },
      {
        value: 'small'
      }
    ]
  },
  {
    label: '设置失效状态',
    value: 'disabled',
    type: 'switch'
  },
]

export {
  switchAttribute
}