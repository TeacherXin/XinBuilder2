import { Switch as AntSwitch } from "antd"
import { actionFun } from "../../../../../../utils/actionUtils";
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Switch(props: any) {
  const { onChange, comId } = props;
  const disabled = useStateByProps('disabled', props, comId)
  const size = useStateByProps('size', props, comId)

  const onchange = () => {
    actionFun(onChange)
  }

  return (
    <div>
      <AntSwitch onChange={onchange} disabled={disabled} size={size} />
    </div>
  )
}
