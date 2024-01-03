import { ComAttribute } from "../attributeMap"
const qrcodeAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '扫描后的文本',
    value: 'value',
    type: 'input'
  },
  {
    label: '二维码大小',
    value: 'size',
    type: 'number'
  },
  {
    label: '二维码颜色',
    value: 'color',
    type: 'color'
  },
  {
    label: '二维码背景颜色',
    value: 'bgColor',
    type: 'color'
  },
  {
    label: '是否有边框',
    value: 'bordered',
    type: 'switch'
  },
]

export {
  qrcodeAttribute
}