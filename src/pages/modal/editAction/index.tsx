import React, { useEffect, useState } from 'react'
import './index.css'
import {Modal} from 'antd'
// 核心组件
import AceEditor from 'react-ace'
// 引入对应的语言
import 'ace-builds/src-noconflict/mode-javascript'
//以下import的是风格
import 'ace-builds/src-noconflict/theme-eclipse'
// 代码提示
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'
import Store from '../../../store/index'
import { getComById } from '../../../utils/nodeUtils'

interface IEditAction {
    showAction: boolean
    actionName: string
    setShowAction: any
}

const EditAction: React.FunctionComponent<IEditAction> = (props: IEditAction) => {
    const { showAction,actionName, setShowAction } = props

    const comList = JSON.parse(JSON.stringify(Store.getState().comList))
    const selectCom = Store.getState().selectCom
    const selectNode = getComById(selectCom, comList)
    const [ actionJs, setActionJs ] = useState('')

    useEffect(() => {
        if(selectNode?.[actionName]) {
            setActionJs(selectNode?.[actionName])
        }else {
            setActionJs('')
        }
    }, [showAction])

    const onOk = () => {
        setShowAction(false);
        if(selectNode) {
            selectNode[actionName] = actionJs;
        }
        Store.dispatch({type: 'changeComList', value:comList})
    }

    const onCancel = () => {
        setShowAction(false)
    }

    return (
      <Modal
        open={showAction}
        onOk={onOk}
        width={600}
        onCancel={onCancel}
        closable={false}
      >
        <AceEditor
          name='editAction'
          mode='javascript'
          theme='github'
          setOptions={{
            // 基础的自动完成
            enableBasicAutocompletion: true,
            // 实时自动完成
            enableLiveAutocompletion: true,
            // 代码块
            enableSnippets: true,
            // 显示行号
            showLineNumbers: true,
            // tab键两个空格
            tabSize: 2
          }}
          onChange={setActionJs}
          value={actionJs}
        />
      </Modal>
    )
};

export default EditAction;
