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

export {
    actionFun
}