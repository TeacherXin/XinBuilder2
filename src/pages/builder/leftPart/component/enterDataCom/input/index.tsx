import { Input as AntInput } from 'antd'
import Store from "../../../../../../store"
import { getComById } from "../../../../../../utils/nodeUtils"

export default function Input(props: any) {
  const {addonAfter, addonBefore, allowClear, disabled, showCount, size, comStyle, comId, value} = props;
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))

  const changeValue = (e: any) => {
    const inputNode = getComById(comId, comList);
    inputNode.value = e.target.value;
    Store.dispatch({type: 'changeComList', value: comList})
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
