import { ComAttribute } from "../attributeMap"

const rateAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '再次点击允许清除',
    value: 'allowClear',
    type: 'switch'
  },
  {
    label: '允许半选',
    value: 'allowHalf',
    type: 'switch'
  },
  {
    label: 'star总数',
    value: 'count',
    type: 'number'
  },
  {
    label: '设置只读',
    value: 'disabled',
    type: 'switch'
  },
]

export {
  rateAttribute
}