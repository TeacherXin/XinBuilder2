import {useState, useRef, useEffect} from 'react'
import './index.css'
import * as components from '../leftPart/component'
import Store from '../../../store/index'
import { subscribeHook } from '../../../store/subscribe'
import { getComById } from '../../../utils/nodeUtils'
import { componentTextMap } from '../leftPart/staticUtil/iconList'
import { includesList, leftDropContainer, mainDropContainer } from './staticUtils/include'
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons'
import { message } from 'antd'

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
  const [copyNode, setCopyNode] = useState<ComJson>();
  const nowCom = Store.getState().dragCom
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  subscribeHook()
  let currentMousePosition = { x: 0, y: 0 };

  useEffect(() => {
    const copyFun = (e: any) => {
      const comList = JSON.parse(JSON.stringify(Store.getState().comList))
      if((e.ctrlKey || e.metaKey) && e.key === 'v') {
        const style = {
          position: 'absolute',
          left: currentMousePosition.x + 'px',
          top: currentMousePosition.y + 'px',
          zIndex:100
        }
        let comId = `comId_${Date.now()}`;
        const newNode = {...copyNode, comId, style};
        comList.push(newNode);
        Store.dispatch({type: 'changeComList', value: comList});
        setSelectId(comId);
        Store.dispatch({type: 'changeSelectCom', value: comId});
      }
    }
    const mouseMove = (e: any) => {
      currentMousePosition.x = e.clientX;  
      currentMousePosition.y = e.clientY; 
    }
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('keydown', copyFun);
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('keydown', copyFun);
    }
  }, [copyNode])

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

  const deleteCom = () => {
    const list = comList.filter((item:ComJson) => {
      return item.comId !== selectId;
    })
    Store.dispatch({type: 'changeComList', value: list})
    message.success('删除成功');
  }

  const copyCom = () => {
    const copyNode = comList.find((item: ComJson) => {
      return item.comId === selectId;
    })
    setCopyNode(copyNode);
    message.success('复制成功，ctrl + v 或者 command + v 进行复制');
  }

  const getComponent = (com: any) => {
    const Com = components[com.comType as keyof typeof components];
    return <div>
        <div onDrop={onDropContainer(com)} key={com.comId} onClick={selectCom(com)}>
          <div draggable onDragStart={onDragStart(com)} style={com.style}>
            {selectId === com.comId && <div className='buttonList'>
              <CopyOutlined onClick={copyCom} />
              <DeleteOutlined onClick={deleteCom}/>
            </div>}
            <div className={com.comId === selectId ? 'selectCom' : ''}>
              <Com {...com} >
                {
                  com.childList && com.childList.map((item: any) => {
                    return getComponent(item)
                  })
                }
              </Com>
            </div>
          </div>
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
