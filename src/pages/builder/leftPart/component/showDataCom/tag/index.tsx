import { Tag as AntTag } from 'antd';

export default function Tag(props: any) {
  const { color, bordered, caption, comStyle } = props
  return (
    <div>
      <AntTag
        color={color}
        bordered={bordered}
        style={{...comStyle}}
      >
        { caption || '标签'}
      </AntTag>
    </div>
  )
}
