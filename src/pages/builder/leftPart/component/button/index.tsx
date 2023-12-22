import { Button as AntButton } from 'antd'

export default function Button(props: any) {
  const {style} = props
  return (
    <div style={style}>
      <AntButton>按钮</AntButton>
    </div>
  )
}
