import './index.css'
import { Input, Tabs } from 'antd';
import type { TabsProps } from 'antd';

export default function RightCom() {

  const getAttributePanel = () => {
    return <div>
      <div className='attributeItem'>
        <label>按钮文字：</label>
        <div className='attributeItemValue'>
          <Input onChange={changeComAttribute} />
        </div>
      </div>
    </div>
  }

  const changeComAttribute = (e:any) => {
    window.renderCom.caption = e.target.value;
    window.setComList([...window.comList])
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

  const onChange = () => {
    
  }

  return (
    <div className='rightCom'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
