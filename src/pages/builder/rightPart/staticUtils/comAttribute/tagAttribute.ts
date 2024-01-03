import { ComAttribute } from "../attributeMap"

const tagAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '标签颜色',
    value: 'color',
    type: 'color'
  },
  {
    label: '是否有边框',
    value: 'bordered',
    type: 'switch'
  }
]

export {
  tagAttribute
}