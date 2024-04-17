import {useState, useRef} from 'react'
import './index.css'
import * as components from '../leftPart/component'
import Store from '../../../store/index'
import { subscribeHook } from '../../../store/subscribe'
import { getComById } from '../../../utils/nodeUtils'
import { componentTextMap } from '../leftPart/staticUtil/iconList'
import { includesList, leftDropContainer, mainDropContainer } from './staticUtils/include'

let num = 1;
export interface ComJson {
  comType: string,
  comId: string,
  caption?:string,
  style?: any,
  childList?: ComJson []
}

interface Distance {
  startLeft: number | undefined,
  startTop: number | undefined,
  endLeft: number | undefined,
  endTop: number | undefined
}

export default function MainCom() {

  const [dragComId, setDragComId] = useState<string>('')
  const [selectId, setSelectId] = useState<string>('')
  const nowCom = Store.getState().dragCom
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  subscribeHook()

  const distance = useRef<Distance>({
    startLeft: void 0,
    startTop: void 0,
    endLeft: void 0,
    endTop: void 0
  })

  const onDrop = (e: any) => {
    distance.current.endLeft = e.clientX;
    distance.current.endTop = e.clientY;
    let style: any;
    if(dragComId) {
      const node = getComById(dragComId, comList)
      if(node) {
        node.style = {
          ...node.style,
          left: parseInt(node.style.left) + (e.clientX - (distance.current.startLeft || 0)) + 'px',
          top: parseInt(node.style.top) + (e.clientY - (distance.current.startTop || 0)) + 'px'
        }
      }
      setDragComId('')
      setSelectId(dragComId)
      Store.dispatch({type: 'changeSelectCom', value: dragComId});
    }else{
      style = {
        position: 'absolute',
        left: distance.current.endLeft + 'px',
        top: distance.current.endTop + 'px',
        zIndex:100
      }
      let comId = `comId_${Date.now()}`
      const comNode = {
        comType: nowCom,
        style,
        comId,
        caption: componentTextMap[nowCom] + num++
      }
      comList.push(comNode)
      setSelectId(comId)
      Store.dispatch({type: 'changeSelectCom', value: comId})
    }
    Store.dispatch({type: 'changeComList', value: comList})
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDragStart = (com: ComJson) => {
    return (e: any) => {
      setDragComId(com.comId);
      distance.current.startLeft = e.clientX;
      distance.current.startTop = e.clientY;
    }
  }

  const onDropContainer = (com: ComJson) => {
    return (e: any) => {
      const dragCom = getComById(dragComId, comList)
      if(Object.keys(includesList).includes(com.comType)) {
        // 如果是画布区的拖拽要先将节点从comList中删除掉
        if(dragCom && dragCom !== com) {
          mainDropContainer(e, com, dragCom, comList);
          setDragComId('')
          return;
        }else if(dragCom){
          // 拖拽的是容器本身
          return;
        }
        // 从左侧列表进行拖拽
        leftDropContainer(e, com, nowCom, componentTextMap, comList);
      }
    }
  }

  const selectCom = (com: ComJson) => {
    return (e: any) => {
      e.stopPropagation()
      setSelectId(com.comId);
      Store.dispatch({type: 'changeSelectCom', value: com.comId});
    }
  }

  const getComponent = (com: any) => {
    const Com = components[com.comType as keyof typeof components];
    return <div onDrop={onDropContainer(com)} key={com.comId} onClick={selectCom(com)}>
      <div draggable onDragStart={onDragStart(com)} className={com.comId === selectId ? 'selectCom' : ''} style={com.style}>
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
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter} className='mainCom'>
      {
        comList.map((com: ComJson) => {
          return getComponent(com)
        })
      }
    </div>
  )
}
