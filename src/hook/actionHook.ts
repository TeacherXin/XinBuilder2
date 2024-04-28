import { isRender } from "../utils/renderUtils";
import { useEffect, useState } from "react";

const useStateByProps = (propName: string, props: any, comId: string) => {
    const [state, dispatch] = useState(props[propName])

    useEffect(() => {
        dispatch(props[propName])
    }, [props[propName]])
    
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (isRender()) {
        const Ctx = window.getNodeById(comId);
        Ctx['set' + propName.charAt(0).toLocaleUpperCase() + propName.slice(1)] = dispatch;
    }
    return state
}

export {
    useStateByProps
}