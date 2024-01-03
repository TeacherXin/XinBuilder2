import { ComAttribute } from "../attributeMap"
const progressAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '百分比',
    value: 'percent',
    type: 'number'
  },
  {
    label: '展示图标',
    value: 'showInfo',
    type: 'switch'
  },
  {
    label: '进度条色彩',
    value: 'strokeColor',
    type: 'color'
  },
  {
    label: '状态',
    value: 'status',
    type: 'select',
    options: [
      {
        value: 'success'
      },
      {
        value: 'exception'
      },
      {
        value: 'normal'
      },
      {
        value: 'active'
      }
    ],
    defaultValue: 'active'
  },
  {
    label: '进度条尺寸',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'small'
      },
      {
        value: 'default'
      }
    ],
    defaultValue: 'default'
  },
  {
    label: '类型',
    value: 'type',
    type: 'select',
    options: [
      {
        value: 'line'
      },
      {
        value: 'circle'
      },
      {
        value: 'dashboard'
      }
    ],
    defaultValue: 'line'
  },
]

export {
  progressAttribute
}