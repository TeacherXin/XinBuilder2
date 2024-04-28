import { ComJson } from "../pages/builder/mainPart";
import Store from "../store";

let num = 0;

const getComById = (comId: string, comList: ComJson []): any => {
  const treeList = [...comList] || [...Store.getState().comList];

  for(let i=0; i<treeList.length; i++) {
    if(treeList[i].comId === comId) {
      return treeList[i]
    }else if(treeList[i].childList) {
      treeList.push(...(treeList[i].childList || []))
    }
  }
}

const createCom = (props: any) => {
  const { comType, caption = `${comType}${++num}` } = props;
  let comId = `comId_${Date.now()}${++num}`;
  return {
    comId,
    comType,
    caption,
    ...props
  }
}

export {
  getComById,
  createCom
}