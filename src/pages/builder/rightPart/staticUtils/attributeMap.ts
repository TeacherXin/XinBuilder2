interface AttributeMap {
  [key: string]: ComAttribute[]
}

interface ComAttribute {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string
}

const buttonAttribute: ComAttribute[] = [
  {
    label: '设置按钮文字',
    value: 'caption',
    type: 'input'
  },
  {
    label: '设置危险按钮',
    value: 'danger',
    type: 'switch'
  },
  {
    label: '设置按钮禁用',
    value: 'disabled',
    type: 'switch'
  },
  {
    label: '设置幽灵按钮',
    value: 'ghost',
    type: 'switch'
  }, 
  {
    label: '设置按钮形状',
    value: 'shape',
    type: 'select',
    options: [
      {
        value: 'default'
      },
      {
        value: 'circle'
      },
      {
        value: 'round'
      }
    ],
    defaultValue: 'default'
  },
  {
    label: '设置按钮大小',
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
  }
]

const attributeMap: AttributeMap = {
  Button: buttonAttribute
}

export {
  attributeMap
}