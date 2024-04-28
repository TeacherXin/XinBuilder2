import { Checkbox as AntCheckbox } from 'antd'
import { actionFun } from '../../../../../../utils/actionUtils'

export default function Checkbox(props: any) {
  const { caption, disabled, onChange } = props

  const onchange = () => {
    actionFun(onChange);
  }
  return (
    <div>
      <AntCheckbox onChange={onchange} disabled={disabled}>{caption || '多选框'}</AntCheckbox>
    </div>
  )
}
