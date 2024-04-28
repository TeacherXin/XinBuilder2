import { actionFun } from "../../../../../../utils/actionUtils";

export default function Icon(props: any) {
  const { rotate, spin, type, comStyle, onClick } = props;
  const IconComponent = require('@ant-design/icons')[type || 'HomeOutlined']

  const onclick = () => {
    actionFun(onClick)
  }
  return (
    <div>
      <IconComponent onClick={onclick} style={{...comStyle}} rotate={rotate} spin={spin}/>
    </div>
  )
}
