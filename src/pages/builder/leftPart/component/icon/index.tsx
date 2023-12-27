export default function Icon(props: any) {
  const { rotate, spin, type } = props;
  const IconComponent = require('@ant-design/icons')[type || 'HomeOutlined']
  return (
    <div>
      <IconComponent rotate={rotate} spin={spin}/>
    </div>
  )
}
