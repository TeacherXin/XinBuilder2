import { Progress as AntProgress } from 'antd';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Progress(props: any) {
  const { comStyle, comId } = props
  const percent = useStateByProps('percent', props, comId)
  const showInfo = useStateByProps('showInfo', props, comId)
  const strokeColor = useStateByProps('strokeColor', props, comId)
  const status = useStateByProps('status', props, comId)
  const size = useStateByProps('size', props, comId)
  const type = useStateByProps('type', props, comId)
  return (
    <div>
      <AntProgress
        style={{width: '100px', ...comStyle}}
        percent={percent || 30}
        showInfo={showInfo}
        strokeColor={strokeColor}
        status={status}
        size={size}
        type={type}
      />
    </div>
  )
}
