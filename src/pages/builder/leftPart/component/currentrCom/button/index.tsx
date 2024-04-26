import { Button as AntButton } from 'antd'
import { isRender } from '../../../../../../utils/nodeUtils';

export default function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size, type, comStyle, onClick } = props
  const IconComponent = require('@ant-design/icons')[type]

  const onclick = () => {
    if(!isRender()){
      return;
    }
    try {
      const fun = new Function(onClick);
      fun()
    } catch (error) {
      console.error(error);
    }
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
