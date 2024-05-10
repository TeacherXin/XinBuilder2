import { Checkbox as AntCheckbox } from 'antd'
import { actionFun } from '../../../../../../utils/actionUtils'
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Checkbox(props: any) {
  const { onChange, comId } = props
  const caption = useStateByProps('caption', props, comId)
  const disabled = useStateByProps('disabled', props, comId)

  const onchange = () => {
    actionFun(onChange);
  }
  return (
    <div>
      <AntCheckbox onChange={onchange} disabled={disabled}>{caption || '多选框'}</AntCheckbox>
    </div>
  )
}
