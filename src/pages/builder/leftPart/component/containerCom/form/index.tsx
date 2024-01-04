import { Form as AntForm} from "antd"
import { getComById } from "../../../../../../utils/nodeUtils"
import Store from "../../../../../../store"

export default function Form(props: any) {
  const { children, disabled, labelAlign, labelWrap, size, colon, comStyle } = props
  return (
    <div>
      <AntForm
        disabled={disabled}
        labelAlign={labelAlign}
        labelWrap={labelWrap}
        size={size}
        colon={colon}
        style={{width: '400px', height: '400px', border:' 1px solid blue',...comStyle}}
      >
        {
          children && children.map((item: any) => {
            return <AntForm.Item label={getComById(item.key, Store.getState().comList).label}>
              {item}
            </AntForm.Item>
          })
        }
      </AntForm>
    </div>
  )
}
