import { Avatar as AntAvatar } from 'antd';

export default function Avatart(props: any) {
  const { src, shape, size, icon, comStyle} = props
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
