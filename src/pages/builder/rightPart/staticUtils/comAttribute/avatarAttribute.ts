import { ComAttribute } from "../attributeMap"
const avatarAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '资源地址',
    value: 'src',
    type: 'input'
  },
  {
    label: '设置头像形状',
    value: 'shape',
    type: 'select',
    options: [
      {
        value: 'circle'
      },
      {
        value: 'square'
      }
    ],
    defaultValue: 'circle'
  },
  {
    label: '设置头像大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'large'
      },
      {
        value: 'default'
      },
      {
        value: 'small'
      }
    ],
    defaultValue: 'default'
  },
  {
    label: '选择图标',
    value: 'icon',
    type: 'modal',
    modalType: 'IconSelect'
  }
]

export {
  avatarAttribute
}