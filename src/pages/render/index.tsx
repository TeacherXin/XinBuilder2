import React, { useEffect } from 'react';
import { message } from 'antd';
import Store from '../../store'
import axios from 'axios';
import { ComJson } from '../builder/mainPart';
import * as components from '../builder/leftPart/component'
import { subscribeHook } from '../../store/subscribe';

interface IRenderProps {
}

const Render: React.FunctionComponent<IRenderProps> = (props) => {
    const comList = JSON.parse(JSON.stringify(Store.getState().comList))

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

      subscribeHook()

      const getComponent = (com: any) => {
        const Com = components[com.comType as keyof typeof components];
        return <div key={com.comId}>
          <div style={com.style}>
            <Com {...com} >
              {
                com.childList && com.childList.map((item: any) => {
                  return getComponent(item)
                })
              }
            </Com>
          </div>
        </div>
      }

      return (
        <div className='mainCom'>
          {
            comList.map((com: ComJson) => {
              return getComponent(com)
            })
          }
        </div>
      )
};

export default Render;
