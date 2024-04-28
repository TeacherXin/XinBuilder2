import { Switch as AntSwitch } from "antd"
import { actionFun } from "../../../../../../utils/actionUtils";

export default function Switch(props: any) {
  const { disabled, size, onChange } = props;

  const onchange = () => {
    actionFun(onChange)
  }

  return (
    <div>
      <AntSwitch onChange={onchange} disabled={disabled} size={size} />
    </div>
  )
}
