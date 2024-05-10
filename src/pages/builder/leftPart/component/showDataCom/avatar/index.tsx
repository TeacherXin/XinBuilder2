import { Avatar as AntAvatar } from 'antd';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Avatart(props: any) {
  const { src, comStyle, comId} = props
  const shape = useStateByProps('shape', props, comId)
  const size = useStateByProps('size', props, comId)
  const icon = useStateByProps('icon', props, comId)
  const IconComponent = require('@ant-design/icons')[icon || 'UserOutlined']
  return (
    <div>
      <AntAvatar
        size={ size || 40}
        icon={<IconComponent />}
        src={src}
        shape={shape}
        style={{...comStyle}}
      />
    </div>
  )
}
