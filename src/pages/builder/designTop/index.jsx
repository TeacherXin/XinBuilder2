import { Button, message } from 'antd'
import './index.css'
import Store from '../../../store'
import axios from 'axios'

export default function DesignTop() {

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

  return (
    <div className='designTop'>
      <span className='title'>XinBuilder</span>
      <Button onClick={savePage} type='primary' ghost>保存</Button>
    </div>
  )
}
