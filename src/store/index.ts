import { configureStore } from '@reduxjs/toolkit'
const initialState  = { comList: [], dragCom: '', selectCom: '' }
window.ctx = null;

const getNodeById = (comId: string, modalTx: any): any => {
  const treeList = modalTx || window.ctx || [];
  let result = null;
  for (let i = 0; i < treeList.length; i++) {
      if (treeList[i].comId === comId) {
          result = treeList[i];
      } else if (treeList[i].childList) {
          result = getNodeById(comId, treeList[i].childList);
      }
  }
  return result
}

window.getNodeById = getNodeById;

const comReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'changeNowCom': {
      return {...state, dragCom: action.value}
    }
    case 'changeComList': {
      window.ctx = JSON.parse(JSON.stringify(action.value))
      return {...state, comList: action.value}
    }
    case 'changeSelectCom': {
      return {...state, selectCom: action.value}
    }
    default: {
      return state
    }
  }
}

export default configureStore({ 
  reducer: comReducer,
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    //关闭redux序列化检测
    serializableCheck:false
  })
});