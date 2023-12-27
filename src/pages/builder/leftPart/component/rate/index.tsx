import { Rate as AntRate } from "antd"

export default function Rate(props: any) {
  const { allowClear, allowHalf, count, disabled } = props
  return (
    <div>
      <AntRate allowClear={allowClear} allowHalf={allowHalf} count={parseInt(count || 5)} disabled={disabled} />
    </div>
  )
}
