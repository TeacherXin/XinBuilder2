import { Switch as AntSwitch } from "antd"

export default function Switch(props: any) {
  const { disabled, size } = props
  return (
    <div>
      <AntSwitch disabled={disabled} size={size} />
    </div>
  )
}
