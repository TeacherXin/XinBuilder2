import { FloatButton as AntFloatButton } from 'antd'
import { actionFun } from '../../../../../../utils/actionUtils'

export default function FloatButton(props: any) {
  const { caption, shape, type, comStyle, onClick } = props
  const IconComponent = require('@ant-design/icons')[type]

  const onclick = () => {
    actionFun(onClick);
  }
  return (
    <div>
      <AntFloatButton
        style={{position:'absolute',...comStyle}}
        shape={shape}
        icon={type ?  <IconComponent /> : null}
        onClick={onclick}
        >
          {caption || '按钮'}
      </AntFloatButton>
    </div>
  )
}
