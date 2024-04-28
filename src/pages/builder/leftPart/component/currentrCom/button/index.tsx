import { Button as AntButton } from 'antd'
import { actionFun } from '../../../../../../utils/actionUtils';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Button(props: any) {
  const { comStyle, onClick, comId } = props
  const caption = useStateByProps('caption', props, comId)
  const danger = useStateByProps('danger', props, comId)
  const disabled = useStateByProps('disabled', props, comId)
  const ghost = useStateByProps('ghost', props, comId)
  const shape = useStateByProps('shape', props, comId)
  const size = useStateByProps('size', props, comId)
  const type = useStateByProps('type', props, comId)

  const IconComponent = require('@ant-design/icons')[type]

  const onclick = () => {
    actionFun(onClick);
  }

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
        onClick={onclick}
        >
          {caption || '按钮'}
      </AntButton>
    </div>
  )
}
