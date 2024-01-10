import { ComJson } from "..";
import { message } from 'antd';
import Store from "../../../../store";
import { ComponentTextMap } from "../../leftPart/staticUtil/iconList";
let num = 1;

const includesList: {[key: string]: string[] } = {
  Form: ['Input', 'Checkbox', 'Radio', 'Rate', 'Switch'],
  Card: ['Input', 'Checkbox', 'Radio', 'Rate', 'Switch', 'Button','Icon','Alert','Progress','Avatar','QrCode','Tag'],
  Badge: ['Button','Avatar']
}

const mainDropContainer = (e: any, com: ComJson, dragCom: ComJson, comList: ComJson[]) => {
  if(!includesList[com.comType].includes(dragCom?.comType)) {
    e.stopPropagation()
    message.error('该容器下不支持拖拽该类型组件');
  }else{
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
  }
}

const leftDropContainer = (e: any, com: ComJson, nowCom: string, componentTextMap: ComponentTextMap, comList: ComJson[]) => {
  if(!includesList[com.comType].includes(nowCom)) {
    e.stopPropagation()
    message.error('该容器下不支持拖拽该类型组件');
  }else{
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


export {
  includesList,
  mainDropContainer,
  leftDropContainer
}