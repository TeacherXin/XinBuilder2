import { Checkbox as AntCheckbox } from 'antd'

export default function Checkbox(props: any) {
  const { caption, disabled} = props
  return (
    <div>
      <AntCheckbox disabled={disabled}>{caption || '多选框'}</AntCheckbox>
    </div>
  )
}
