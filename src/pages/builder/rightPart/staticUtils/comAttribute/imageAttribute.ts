import { ComAttribute } from "../attributeMap"

const imageAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '图像描述',
    value: 'alt',
    type: 'input'
  },
  {
    label: '图片地址',
    value: 'src',
    type: 'input'
  }
]

export {
  imageAttribute
}