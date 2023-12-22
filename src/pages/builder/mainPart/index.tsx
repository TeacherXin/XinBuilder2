import {useState, useRef} from 'react'
import './index.css'
import * as components from '../leftPart/component'

interface ComJson {
  comType: string,
  style?: any
}

interface Distance {
  startLeft: number | undefined,
  startTop: number | undefined,
  endLeft: number | undefined,
  endTop: number | undefined
}

export default function MainCom() {

  const [comList, setComList] = useState<ComJson []>([])
  const [dragCom, setDragCom] = useState<ComJson | null>(null)

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
    if(window.nowCom === 'renderCom' && dragCom && dragCom.style) {
      dragCom.style = {
        ...dragCom.style,
        left: parseInt(dragCom.style.left) + (e.clientX - (distance.current.startLeft || 0)) + 'px',
        top: parseInt(dragCom.style.top) + (e.clientY - (distance.current.startTop || 0)) + 'px'
      }
    }else{
      style = {
        position: 'absolute',
        left: distance.current.endLeft + 'px',
        top: distance.current.endTop + 'px',
        zIndex:100
      }
      comList.push({
        comType: window.nowCom,
        style
      })
    }
    setComList([...comList])
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDragStart = (com: ComJson) => {
    return (e: any) => {
      window.nowCom = 'renderCom';
      setDragCom(com);
      distance.current.startLeft = e.clientX;
      distance.current.startTop = e.clientY;
    }
  }


  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter} className='mainCom'>
      {
        comList.map(com => {
          const Com = components[com.comType as keyof typeof components];
          return <div draggable onDragStart={onDragStart(com)}>
            <Com style={com.style} />
          </div>
        })
      }
    </div>
  )
}
