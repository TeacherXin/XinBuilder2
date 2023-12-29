import { Input, Switch, Select, Button, ColorPicker} from "antd"
import { useState } from 'react'

export default function InputComponent(props: any) {

  const { onChange, type, defaultValue, options, selectNode, value, modalType,label } = props
  const ModalComponent = require('../../../modal')[modalType || 'IconSelect'];
  const [openModal, setOpenModal] = useState<boolean>(false)

  const showModal = () => {
    setOpenModal(true)
  }


  const getComponent = () => {
    switch (type) {
      case 'input': {
        return <Input value={selectNode[value] || ''} style={{width:'120px'}} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'switch': {
        return <Switch value={selectNode[value] || false} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'select': {
        return <Select value={selectNode[value]|| selectNode?.comStyle?.[value] || defaultValue} style={{width:'120px'}}  options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
      case 'number': {
        return <Input type="number" value={selectNode[value] || parseInt(selectNode?.comStyle?.[value] || '') || '0'} style={{width:'120px'}} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'modal': {
        return <Button onClick={showModal} style={{width:'120px'}}>{label}</Button>
      }
      case 'color': {
        return <ColorPicker disabledAlpha showText value={selectNode?.comStyle?.[value] || ''} style={{width:'120px'}} defaultValue={defaultValue} onChangeComplete = {onChange}/>
      }
    }
  }

  return (
    <div>
      {getComponent()}
      <ModalComponent  openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}
