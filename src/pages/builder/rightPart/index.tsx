import './index.css'
import { Input, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { attributeMap } from './staticUtils/attributeMap';
import { useState } from 'react';
import InputComponent from './staticComponet/InputComponent';

export default function RightCom() {

  const [update, setUpdate] = useState({})

  const getAttributePanel = () => {
    const comType = window.renderCom?.comType;
    const comAttributeList = attributeMap[comType] || []
    return <div>
      {
        comAttributeList.map((item,index) => {
          return <div key={index} className='attributeItem'>
          <label className='attributeLabel'>{item.label}</label>
          <div className='attributeItemValue'>
            <InputComponent {...item} onChange={changeComAttribute(item.value)}/>
          </div>
        </div>
        })
      }
    </div>
  }

  const changeComAttribute = (value: string) => {
    return (e: any) => {
      let attribute = e;
      if(typeof e === 'object') {
        attribute = e.target.value;
      }
      window.renderCom[value] = attribute;
      window.setComList([...window.comList])
    }
  }

  const items: TabsProps['items'] = [
    {
      key: 'attributePanel',
      label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>属性</div>,
      children: getAttributePanel(),
    },
    {
      key: 'stylePanel',
      label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>样式</div>,
      children: 'Content of Tab Pane 2',
    }
  ];

  const onChange = (value: string) => {
    setUpdate({a: 123})
  }

  return (
    <div className='rightCom'>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </div>
  )
}
