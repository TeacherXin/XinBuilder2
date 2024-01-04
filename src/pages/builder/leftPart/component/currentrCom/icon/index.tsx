export default function Icon(props: any) {
  const { rotate, spin, type, comStyle } = props;
  const IconComponent = require('@ant-design/icons')[type || 'HomeOutlined']
  return (
    <div>
      <IconComponent style={{...comStyle}} rotate={rotate} spin={spin}/>
    </div>
  )
}
