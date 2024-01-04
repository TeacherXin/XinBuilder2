import { Input as AntInput } from 'antd'

export default function Input(props: any) {
  const {addonAfter, addonBefore, allowClear, disabled, showCount, size, comStyle} = props
  return (
    <div>
      <AntInput
        style={{...comStyle}}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        allowClear={allowClear}
        disabled={disabled}
        showCount={showCount}
        size={size}
      />
    </div>
  )
}
