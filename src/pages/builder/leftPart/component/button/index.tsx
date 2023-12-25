import { Button as AntButton } from 'antd'

export default function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size} = props
  return (
    <div>
      <AntButton
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        shape={shape}
        size={size}
        >
          {caption || '按钮'}
      </AntButton>
    </div>
  )
}
