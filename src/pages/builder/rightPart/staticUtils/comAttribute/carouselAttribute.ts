import { ComAttribute } from "../attributeMap"
const carouselAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '是否自动切换',
    value: 'autoplay',
    type: 'switch'
  },
  {
    label: '自动切换的间隔',
    value: 'autoplaySpeed',
    type: 'number'
  },
  {
    label: '面板指示点位置',
    value: 'dotPosition',
    type: 'select',
    options: [
      {
        value: 'top'
      },
      {
        value: 'bottom'
      },
      {
        value: 'left'
      },
      {
        value: 'right'
      }
    ],
    defaultValue: 'bottom'
  },
  {
    label: '使用渐变切换动效',
    value: 'fade',
    type: 'switch'
  },
]

export {
  carouselAttribute
}