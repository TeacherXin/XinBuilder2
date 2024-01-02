import './index.css'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { attributeMap } from './staticUtils/attributeMap';
import InputComponent from './staticComponet/InputComponent';
import Store from '../../../store/index'
import { subscribeHook } from '../../../store/subscribe'
import { getComById } from '../../../utils/nodeUtils';
import { styleMap } from './staticUtils/styleMap';

export default function RightCom() {

  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  const selectCom = Store.getState().selectCom
  const selectNode = getComById(selectCom, comList)
  subscribeHook()

  const getAttributePanel = () => {
    const comType = selectNode?.comType || '';
    const comAttributeList = attributeMap[comType] || []
    return <div>
      {
        comAttributeList.map((item,index) => {
          return <div key={index} className='attributeItem'>
          <label className='attributeLabel'>{item.label}</label>
          <div className='attributeItemValue'>
            <InputComponent selectNode={selectNode} {...item} onChange={changeComAttribute(item.value)}/>
          </div>
        </div>
        })
      }
    </div>
  }

  const getStylePanel = () => {
    const comType = selectNode?.comType || '';
    const styleList = styleMap[comType] || []
    return <div>
      {
        styleList.map((item,index) => {
          return <div key={index} className='attributeItem'>
          <label className='attributeLabel'>{item.label}</label>
          <div className='attributeItemValue'>
            <InputComponent selectNode={selectNode} {...item} onChange={changeComStyle(item.value)}/>
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
      if(selectNode) {
        selectNode[value as keyof typeof selectNode] = attribute;
      }
      Store.dispatch({type: 'changeComList', value:comList})
    }
  }

  const changeComStyle = (value: string) => {
    return (e: any) => {
      let attribute = e;
      if(typeof e === 'object') {
        if(['color', 'backgroundColor', 'borderColor'].includes(value)) {
          attribute = e.toHexString()
        }else{
          attribute = e.target.value;
        }
      }
      if(['width', 'height','borderWidth','fontSize'].includes(value)) {
        attribute += 'px'
      }
      if(selectNode) {
        if(!selectNode.comStyle) {
          selectNode.comStyle = {}
        }
        selectNode.comStyle[value] = attribute;
      }
      Store.dispatch({type: 'changeComList', value:comList})
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
      children: getStylePanel(),
    }
  ];

  const onChange = (value: string) => {

  }

  return (
    <div className='rightCom'>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </div>
  )
}
