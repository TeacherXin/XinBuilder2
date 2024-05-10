import { Form as AntForm, Button, message} from "antd"
import { getComById, createCom } from "../../../../../../utils/nodeUtils"
import { isRender } from "../../../../../../utils/renderUtils"
import Store from "../../../../../../store"
import { useEffect } from "react"
import axios from "axios"
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Form(props: any) {
  const { children, comStyle, entityCode, schemaList, comId} = props
  const disabled = useStateByProps('disabled', props, comId);
  const labelAlign = useStateByProps('labelAlign', props, comId);
  const labelWrap = useStateByProps('labelWrap', props, comId);
  const size = useStateByProps('size', props, comId);
  const colon = useStateByProps('colon', props, comId);
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  const formNode = getComById(comId, comList);

  useEffect(() => {
    if(entityCode && schemaList?.length > 0) {
      formNode.childList = []
      const inputList = schemaList.map((item: string) => {
        return createCom({comType: 'Input', caption: item, label: item})
      })
      formNode.childList.push(...inputList)
      Store.dispatch({type: 'changeComList', value: JSON.parse(JSON.stringify(comList))})
    }
  }, [])

  const submit = () => {
    if(!isRender()) {
      return;
    }
    const childList = formNode.childList || [];
    const data: any = {};
    childList.forEach((element: any) => {
      if(element.label) {
        data[element.label] = element.value
      }
    });

    if(entityCode) {
      axios.post("http://localhost:4000/entity/addEntityData", {
        entityCode,
        entityParam: {...data}
      })
      .then(res => {
        if(res.data.code === 200) {
          message.success('添加成功')
        }else {
          message.error('添加失败')
        }
      })
    }
  }

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
            return <AntForm.Item label={getComById(item.key, comList).label}>
              {item}
            </AntForm.Item>
          })
        }
      </AntForm>
      {entityCode && <Button onClick={submit} style={{float:"right"}} type="primary">保存</Button>}
    </div>
  )
}
