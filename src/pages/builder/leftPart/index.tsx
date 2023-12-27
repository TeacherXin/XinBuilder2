import './index.css'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import * as components from './component'
import { componentIconMap, componentTextMap } from './staticUtil/iconList';
import Store from '../../../store';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

export default function LeftCom() {

  const onDragStart = (name: string) => {
    return () => {
      Store.dispatch({type: 'changeNowCom', value: name});
    }
  }

  const renderComponent = (comTypeList: string[]) => {
    const list = Object.keys(components).filter(item => comTypeList.includes(item))
    return <div className="componetGroup">
      {
        list.map(name => {
          const Icon = componentIconMap[name]
          const text = componentTextMap[name]
          return <div key={name} className='componentItem'>
            <div onDragStart={onDragStart(name)} draggable style={{display: 'inline-block'}}><Icon style={{marginRight:'10px'}} /><span>{text}</span></div>
          </div>
        })
      }
    </div>
  }

  const collapseItems: CollapseProps['items'] = [
    {
      key: 'enterDataCom',
      label: '数据录入组件',
      children: renderComponent(['Input','Checkbox','Radio','Rate','Switch']),
    },
    {
      key: 'otherCom',
      label: '其他组件',
      children: renderComponent(['Button','Icon']),
    }
  ];

  const items: TabsProps['items'] = [
    {
      key: 'component',
      label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>组件</div>,
      children: <Collapse className='comCollapse' items={collapseItems} defaultActiveKey={'enterDataCom'}/>,
    },
    {
      key: 'data',
      label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>数据</div>,
      children: 'Content of Tab Pane 2',
    }
  ];

  const onChange = () => {

  }


  return (
    <div className='leftCom'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
