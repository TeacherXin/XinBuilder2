import { Button, message } from 'antd'
import './index.css'
import Store from '../../../store'
import axios from 'axios'
import { ArrowUpOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

export default function DesignTop() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const keydownFun = (e) => {
      if(e.key === 'w') {
        setVisible(true)
      }
    }
    document.addEventListener('keydown', keydownFun);

    return () => {
      document.removeEventListener('keydown', keydownFun)
    }
  }, [])

  const savePage = () => {
    const search = window.location.search || '';
    const pageId = search.replace('?pageId=', '');
    const comList = Store.getState().comList;
    axios.post('http://localhost:4000/page-json/updatePage', {
      pageId,
      pageJson: comList
    })
    .then(res => {
      if(res.data.code == 200) {
        message.success('保存成功')
      }
    })
  }

  const reviewPage = () => {
    const search = window.location.search || '';
    const pageId = search.replace('?pageId=', '');
    const comList = Store.getState().comList;
    axios.post('http://localhost:4000/page-json/updatePage', {
      pageId,
      pageJson: comList
    })
    .then(res => {
      if(res.data.code == 200) {
        window.open(`http://localhost:3000/render?pageId=${pageId}`)
      }
    })
  }

  const hideDesignTop = () => {
    setVisible(false);
    message.info('键盘W按钮按下，恢复顶部栏')
  }

  return (
    <div style={ visible ?  {} : {display: 'none'}} className='designTop'>
      <span className='title'>XinBuilder</span>
      <Button onClick={reviewPage} type='primary' ghost>保存并预览</Button>
      <Button onClick={savePage} type='primary' ghost>保存</Button>
      <div onClick={hideDesignTop} className='icon'>
        <ArrowUpOutlined/>
      </div>
    </div>
  )
}
