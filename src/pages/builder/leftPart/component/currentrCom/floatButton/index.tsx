import { FloatButton as AntFloatButton } from 'antd'
import { actionFun } from '../../../../../../utils/actionUtils'
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function FloatButton(props: any) {
  const { comStyle, onClick, comId } = props
  const caption = useStateByProps('caption', props, comId)
  const shape = useStateByProps('shape', props, comId)
  const type = useStateByProps('type', props, comId)
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
