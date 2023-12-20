import './index.css'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import * as components from './component'
import { componentIconMap, componentTextMap } from './staticUtil/iconList';

export default function LeftCom() {


  const renderComponent = () => {
    return <div className="componetGroup">
      {
        Object.keys(components).map(name => {
          const Icon = componentIconMap[name]
          const text = componentTextMap[name]
          return <div key={name} className='componentItem'>
            <div draggable style={{display: 'inline-block'}}><Icon style={{marginRight:'10px'}} /><span>{text}</span></div>
          </div>
        })
      }
    </div>
  }

  const items: TabsProps['items'] = [
    {
      key: 'component',
      label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>组件</div>,
      children: renderComponent(),
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
