import { actionFun } from "../../../../../../utils/actionUtils";
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Icon(props: any) {
  const { onClick, comId } = props;
  const rotate = useStateByProps('rotate', props, comId)
  const spin = useStateByProps('spin', props, comId)
  const type = useStateByProps('type', props, comId)
  const comStyle = useStateByProps('comStyle', props, comId)
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
