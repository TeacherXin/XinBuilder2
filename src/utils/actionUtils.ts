import { useState } from "react";
import { isRender } from "./renderUtils";

const actionFun = (callback: string): void => {
    if(!isRender()){
        return;
      }
      try {
        // eslint-disable-next-line no-new-func
        const fun = new Function(callback);
        fun()
      } catch (error) {
        console.error(error);
    }
}

const useStateByProps = (propName: string, props: any, comId: string) => {
  const [state, dispatch] = useState(props[propName])
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  if(isRender()) {
    const Ctx = window.getNodeById(comId);
    Ctx['set' + propName.charAt(0).toLocaleUpperCase() + propName.slice(1)] = dispatch;
    return state
  }
}

export {
    actionFun,
    useStateByProps
}