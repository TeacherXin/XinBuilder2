import { Progress as AntProgress } from 'antd';

export default function Progress(props: any) {
  const { percent, showInfo, strokeColor, status, size, comStyle, type } = props
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
