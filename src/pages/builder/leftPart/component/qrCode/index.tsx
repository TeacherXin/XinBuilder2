import {  QRCode as AntQRCode } from 'antd';

export default function QRCode(props: any) {
  const { value, size, color, bgColor, bordered, comStyle} = props
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

