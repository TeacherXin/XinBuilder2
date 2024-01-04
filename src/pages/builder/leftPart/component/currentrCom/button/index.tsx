import { Button as AntButton } from 'antd'

export default function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size, type, comStyle } = props
  const IconComponent = require('@ant-design/icons')[type]
  return (
    <div>
      <AntButton
        style={{...comStyle}}
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        shape={shape}
        size={size}
        icon={type ?  <IconComponent /> : null}
        >
          {caption || '按钮'}
      </AntButton>
    </div>
  )
}
