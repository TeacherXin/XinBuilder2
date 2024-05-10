import { Alert as AntAlert } from 'antd';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Alert(props: any) {
  const { comStyle, comId } = props
  const type = useStateByProps('type', props, comId)
  const message = useStateByProps('message', props, comId)
  const showIcon = useStateByProps('showIcon', props, comId)
  const description = useStateByProps('description', props, comId)
  return (
    <div>
      <AntAlert
        style={{...comStyle}}
        showIcon={showIcon}
        description={description}
        type={ type || 'success'}
        message={ message || 'Success Text'}
      />
    </div>
  )
}
