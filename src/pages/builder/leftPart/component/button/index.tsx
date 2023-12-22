import { Button as AntButton } from 'antd'

export default function Button(props: any) {
  const {caption} = props
  return (
    <div>
      <AntButton>{caption || '按钮'}</AntButton>
    </div>
  )
}
