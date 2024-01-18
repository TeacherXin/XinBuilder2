import { useEffect } from 'react'
import DesignTop from './designTop'
import LeftCom from './leftPart'
import MainCom from './mainPart'
import RightCom from './rightPart'
import axios from 'axios'
import Store from '../../store'
import { message } from 'antd'

export default function Builder() {

  useEffect(() => {
    const search = window.location.search || '';
    const pageId = search.replace('?pageId=', '');
    axios.post('http://localhost:4000/page-json/findPageByID', {
      pageId
    })
    .then(res => {
      if(res.data.data) {
        Store.dispatch({type: 'changeComList', value: res.data.data.pageJson || []})
      }else{
        message.error('获取页面详情失败')
      }
    })
  }, [])

  return (
    <div>
      <DesignTop />
      <LeftCom />
      <MainCom />
      <RightCom />
    </div>
  )
}
