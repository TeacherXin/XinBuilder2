import { ComAttribute } from "../attributeMap"
const badgeAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '小圆点个数',
    value: 'count',
    type: 'number'
  },
  {
    label: '小圆点的颜色',
    value: 'color',
    type: 'color'
  },
  {
    label: '只展示小红点',
    value: 'dot',
    type: 'switch'
  },
  {
    label: '小圆点的大小',
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
    defaultValue: 'default'
  }
]

export {
  badgeAttribute
}