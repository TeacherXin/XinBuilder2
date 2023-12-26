import { configureStore } from '@reduxjs/toolkit'

const initialState  = { comList: [], dragCom: '', selectCom: '' }

const comReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'changeNowCom': {
      return {...state, dragCom: action.value}
    }
    case 'changeComList': {
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