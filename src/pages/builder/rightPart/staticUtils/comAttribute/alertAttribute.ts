import { ComAttribute } from "../attributeMap"
const alertAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '警告提示内容',
    value: 'message',
    type: 'input'
  },
  {
    label: '警告提示的辅助性文字介绍',
    value: 'description',
    type: 'input'
  },
  {
    label: '展示图标',
    value: 'showIcon',
    type: 'switch'
  },
  {
    label: '警告提示样式',
    value: 'type',
    type: 'select',
    options: [
      {
        value: 'success'
      },
      {
        value: 'info'
      },
      {
        value: 'warning'
      },
      {
        value: 'error'
      }
    ],
    defaultValue: 'success'
  },
]

export {
  alertAttribute
}