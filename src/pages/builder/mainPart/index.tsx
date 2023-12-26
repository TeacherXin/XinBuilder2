import {useState, useRef} from 'react'
import './index.css'
import * as components from '../leftPart/component'
import Store from '../../../store/index'
import { subscribeHook } from '../../../store/subscribe'

interface ComJson {
  comType: string,
  comId: string,
  caption?:string,
  style?: any
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
      const node = comList.find((item:ComJson) => item.comId === dragComId)
      node.style = {
        ...node.style,
        left: parseInt(node.style.left) + (e.clientX - (distance.current.startLeft || 0)) + 'px',
        top: parseInt(node.style.top) + (e.clientY - (distance.current.startTop || 0)) + 'px'
      }
      setDragComId('')
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
        comId
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

  const selectCom = (com: ComJson) => {
    return () => {
      setSelectId(com.comId);
      Store.dispatch({type: 'changeSelectCom', value: com.comId});
    }
  }


  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter} className='mainCom'>
      {
        comList.map((com: ComJson) => {
          const Com = components[com.comType as keyof typeof components];
          return <div key={com.comId} onClick={selectCom(com)} draggable onDragStart={onDragStart(com)}>
            <div className={com.comId === selectId ? 'selectCom' : ''} style={com.style}>
              <Com {...com}/>
            </div>
          </div>
        })
      }
    </div>
  )
}
