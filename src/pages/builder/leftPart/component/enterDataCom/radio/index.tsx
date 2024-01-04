import { Radio as AntRadio } from "antd"

export default function Radio(props: any) {
  const { caption, disabled} = props
  return (
    <div>
      <AntRadio disabled={disabled}>{ caption || '单选框'}</AntRadio>
    </div>
  )
}
