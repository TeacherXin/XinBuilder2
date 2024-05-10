import {  QRCode as AntQRCode } from 'antd';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function QRCode(props: any) {
  const { value, comStyle, comId} = props
  const color = useStateByProps('color', props, comId)
  const size = useStateByProps('size', props, comId)
  const bgColor = useStateByProps('bgColor', props, comId)
  const bordered = useStateByProps('bordered', props, comId)
  return (
    <div>
      <AntQRCode
        value={value || '-'}
        size={size}
        color={color}
        bgColor={bgColor}
        bordered={bordered}
        style={{...comStyle}}
      />
    </div>
  )
}

