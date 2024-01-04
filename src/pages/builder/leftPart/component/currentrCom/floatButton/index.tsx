import { FloatButton as AntFloatButton } from 'antd'

export default function FloatButton(props: any) {
  const { caption, shape, type, comStyle } = props
  const IconComponent = require('@ant-design/icons')[type]
  return (
    <div>
      <AntFloatButton
        style={{position:'absolute',...comStyle}}
        shape={shape}
        icon={type ?  <IconComponent /> : null}
        >
          {caption || '按钮'}
      </AntFloatButton>
    </div>
  )
}
