import { Input as AntInput } from 'antd'

export default function Input(props: any) {
  const {style} = props
  return (
    <div style={style}>
      <AntInput />
    </div>
  )
}
