import { Input as AntInput } from 'antd'

export default function Input(props: any) {
  const {addonAfter, addonBefore, allowClear, disabled, showCount, size} = props
  return (
    <div>
      <AntInput
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
