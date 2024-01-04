import {useState, useRef} from 'react'
import './index.css'
import * as components from '../leftPart/component'
import Store from '../../../store/index'
import { subscribeHook } from '../../../store/subscribe'
import { getComById } from '../../../utils/nodeUtils'
import { componentTextMap } from '../leftPart/staticUtil/iconList'

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
      if(['Form', 'Card', 'Badge'].includes(com.comType)) {
        if(dragCom && dragCom !== com) {
          const index = comList.findIndex((item: any) => item.comId === dragCom?.comId);
          if(index > -1) {
            comList.splice(index, 1)
          }
          if(!com.childList) {
            com.childList = []
          }
          delete dragCom.style
          com.childList.push(dragCom);
          Store.dispatch({type: 'changeComList', value: comList})
          e.stopPropagation()
          setDragComId('')
          return;
        }else if(dragCom){
          return;
        }
        let comId = `comId_${Date.now()}`
        const comNode = {
          comType: nowCom,
          comId,
          caption: componentTextMap[nowCom] + num++
        }
        if(!com.childList) {
          com.childList = []
        }
        com.childList.push(comNode);
        Store.dispatch({type: 'changeComList', value: comList})
        e.stopPropagation()
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

  const getComponent = (com: ComJson) => {
    const Com = components[com.comType as keyof typeof components];
    return <div onDrop={onDropContainer(com)} key={com.comId} onClick={selectCom(com)}>
      <div  draggable onDragStart={onDragStart(com)} className={com.comId === selectId ? 'selectCom' : ''} style={com.style}>
        <Com {...com} >
          {
            com.childList && com.childList.map(item => {
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
