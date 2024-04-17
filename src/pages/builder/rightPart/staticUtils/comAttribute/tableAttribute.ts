import { ComAttribute } from "../attributeMap"

const tableAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '选择实体',
    value: 'entityCode',
    type: 'modal',
    modalType: 'EntitySelect'
  },
  {
    label: '展示边框',
    value: 'bordered',
    type: 'switch'
  },
  {
    label: '显示表头',
    value: 'showHeader',
    type: 'switch',
  },
  {
    label: '是否分页',
    value: 'pagination',
    type: 'switch'
  },
  {
    label: '设置表格大小',
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
    defaultValue: 'large'
  },
]

export {
  tableAttribute
}