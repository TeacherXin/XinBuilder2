import { ComAttribute } from "../attributeMap"
const inputAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '设置后置标签',
    value: 'addonAfter',
    type: 'input'
  },
  {
    label: '设置前置标签',
    value: 'addonBefore',
    type: 'input'
  },
  {
    label: '允许清除',
    value: 'allowClear',
    type: 'switch'
  },
  {
    label: '是否禁用',
    value: 'disabled',
    type: 'switch'
  },
  {
    label: '是否展示字数',
    value: 'showCount',
    type: 'switch'
  },
  {
    label: '控件大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'large'
      },
      {
        value: 'middle'
      },
      {
        value: 'small'
      }
    ],
    defaultValue: 'middle'
  },
  {
    label: '标签',
    value: 'label',
    type: 'input'
  },

]

export {
  inputAttribute
}