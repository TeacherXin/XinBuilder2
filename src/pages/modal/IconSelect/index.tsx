import { Modal } from 'antd'
import IconList from './iconMap.json'
import { useState, useEffect } from 'react'
import './index.css'
import Store from '../../../store/index'

export default function IconSelect(props: any) {
  const { openModal, setOpenModal } = props;
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  const selectCom = Store.getState().selectCom
  const selectNode = comList.find((item: any) => item.comId === selectCom)
  const [selectIcon, setSelectIcon] = useState<string>('')

  useEffect(() => {
    setSelectIcon(selectNode.type)
  },[openModal])

  const handleOk = () => {
    selectNode.type = selectIcon;
    Store.dispatch({type: 'changeComList', value:comList})
    setOpenModal(false)
    setSelectIcon('')
  }

  const handleCancel = () => {
    setOpenModal(false)
    setSelectIcon('')
  }
  return (
    <div>
      <Modal closable={false} open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <div className='iconList'>
          {
            IconList.map(item => {
              const Icon =  require('@ant-design/icons')[item];
              return <div onClick={() => {setSelectIcon(item)}} className={selectIcon === item ? 'activeIcon':'iconItem'} key={item}>
                <Icon />
              </div>
            })
          }
        </div>
      </Modal>
    </div>
  )
}
