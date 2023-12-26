import { useState, useEffect } from 'react'
import Store from './index'

function subscribeHook() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [update, setUpdate] = useState<any>({})

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Store.subscribe(() => {
      setUpdate({...update})
    })
  }, [update])
}

export {
  subscribeHook
}