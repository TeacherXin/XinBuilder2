import { ComAttribute } from "../attributeMap"
const cardAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '鼠标移过时可浮起',
    value: 'hoverable',
    type: 'switch'
  },
  {
    label: '设置组件大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'default'
      },
      {
        value: 'small'
      }
    ],
    defaultValue: 'middle'
  }
]

export {
  cardAttribute
}