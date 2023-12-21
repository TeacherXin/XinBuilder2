import {useState} from 'react'
import './index.css'
import * as components from '../leftPart/component'

interface ComJson {
  comType: string,
  style?: any
}

export default function MainCom() {

  const [comList, setComList] = useState<ComJson []>([])

  const onDrop = (e: any) => {
    const endLeft = e.clientX;
    const endTop = e.clientY;
    const style = {
      position: 'absolute',
      left: endLeft + 'px',
      top: endTop + 'px',
      zIndex:100
    }
    comList.push({
      comType: window.nowCom,
      style
    })
    setComList([...comList])
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }


  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter} className='mainCom'>
      {
        comList.map(com => {
          const Com = components[com.comType as keyof typeof components];
          return <Com style={com.style} />
        })
      }
    </div>
  )
}
