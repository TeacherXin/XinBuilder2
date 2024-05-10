import { Input as AntInput } from 'antd'
import Store from "../../../../../../store"
import { getComById } from "../../../../../../utils/nodeUtils"
import { actionFun } from '../../../../../../utils/actionUtils';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Input(props: any) {
  const { comStyle, comId, value, onChange} = props;
  const addonBefore = useStateByProps('addonBefore', props, comId)
  const addonAfter = useStateByProps('addonAfter', props, comId)
  const allowClear = useStateByProps('allowClear', props, comId)
  const disabled = useStateByProps('disabled', props, comId)
  const showCount = useStateByProps('showCount', props, comId)
  const size = useStateByProps('size', props, comId)
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))

  const changeValue = (e: any) => {
    const inputNode = getComById(comId, comList);
    inputNode.value = e.target.value;
    Store.dispatch({type: 'changeComList', value: comList})

    actionFun(onChange)
  }
 
  return (
    <div>
      <AntInput
        style={{...comStyle}}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        allowClear={allowClear}
        disabled={disabled}
        showCount={showCount}
        size={size}
        value={value}
        onChange={changeValue}
      />
    </div>
  )
}
