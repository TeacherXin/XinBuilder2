import { Rate as AntRate } from "antd"
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Rate(props: any) {
  const { comId } = props
  const allowClear = useStateByProps('allowClear', props, comId)
  const allowHalf = useStateByProps('allowHalf', props, comId)
  const count = useStateByProps('count', props, comId)
  const disabled = useStateByProps('disabled', props, comId)
  return (
    <div>
      <AntRate allowClear={allowClear} allowHalf={allowHalf} count={parseInt(count || 5)} disabled={disabled} />
    </div>
  )
}
