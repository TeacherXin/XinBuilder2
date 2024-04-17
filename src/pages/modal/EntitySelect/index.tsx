import { useEffect, useState } from 'react';
import { Modal, Select, Switch, message } from 'antd';
import { getComById } from '../../../utils/nodeUtils'
import Store from '../../../store/index'
import axios from 'axios';

export interface Entity {
  entityCode: string,
  entityName: string,
  entitySchema: EntitySchema
}

interface EntitySchema {
  [key: string]: string
}

const EntitySelect: React.FunctionComponent = (props: any) => {
  const { openModal, setOpenModal, valueKey } = props;
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  const selectCom = Store.getState().selectCom
  const selectNode = getComById(selectCom, comList)
  const [nodeSchemaList, setNodeSchemaList] = useState([...(selectNode.schemaList || [])])

  const [entityList, setEntityList] = useState<Entity []>([])
  const [selectEntity, setSelectEntity] = useState(selectNode.entityCode || '')

  useEffect(() => {
    axios.post("http://localhost:4000/entity/getEntityList")
    .then(res => {
      if(res.data.data) {
        setEntityList(res.data.data)
      }else {
        message.error("请求实体列表失败")
      }
    })
  }, [])

  const handleCancel = () => {
    setOpenModal(false)
    setSelectEntity(selectNode.entityCode || '')
    setNodeSchemaList([...(selectNode.schemaList || [])])
  }

  const handleOk = () => {
    if(selectNode) {
      selectNode[valueKey as keyof typeof selectNode] = selectEntity;
      selectNode.schemaList = nodeSchemaList;
    }
    Store.dispatch({type: 'changeComList', value:comList})
    setOpenModal(false)
    setSelectEntity(selectNode.entityCode || '')
    setNodeSchemaList([...(selectNode.schemaList || [])])
  }

  const getOptions = () => {
    return entityList.map((item: Entity) => {
      return {
        value: item.entityCode,
        label: item.entityCode
      }
    })
  }

  const changeEntity = (value: string) => {
    setSelectEntity(value)
    setNodeSchemaList([])
  }

  const changeSwitch = (schemaCode: string) => {
    return (value: boolean) => {
      if(value && !nodeSchemaList.includes(schemaCode)) {
        nodeSchemaList.push(schemaCode)
      }else if(!value && nodeSchemaList.includes(schemaCode)) {
        const index = nodeSchemaList.indexOf(schemaCode);
        nodeSchemaList.splice(index,1)
      }
      setNodeSchemaList([...nodeSchemaList])
    }
  }

  const getSchemaList = () => {
    const entity = entityList.find((item: Entity) => item.entityCode === selectEntity);
    const schemaList = Object.keys(entity?.entitySchema || {}) || [];
    return <div style={{display:'flex', width:400, justifyContent:'flex-start',flexWrap:'wrap'}}>
      {
        schemaList.map(item => {
          return <div style={{width:'100px'}}>
            <p>{item}</p>
            <Switch onChange={changeSwitch(item)} value={nodeSchemaList.includes(item)}></Switch>
          </div>
        })
      }
    </div>
  }
  
  return <Modal closable={false} open={openModal} onOk={handleOk} onCancel={handleCancel}>
    <div style={{width:250, display:'flex',justifyContent:'space-between'}}>
      <div style={{marginTop:'5px', fontWeight:1000}}>选择实体:</div>
      <Select onChange={changeEntity} value={selectEntity} style={{width: 150}} options={getOptions()}></Select>
    </div>
    <div>
      {
        getSchemaList()
      }
    </div>
  </Modal>;
};

export default EntitySelect;
