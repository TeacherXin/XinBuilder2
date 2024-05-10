import { Radio as AntRadio } from "antd"
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Radio(props: any) {
  const { comId } = props
  const caption = useStateByProps('caption', props, comId)
  const disabled = useStateByProps('disabled', props, comId)
  return (
    <div>
      <AntRadio disabled={disabled}>{ caption || '单选框'}</AntRadio>
    </div>
  )
}
