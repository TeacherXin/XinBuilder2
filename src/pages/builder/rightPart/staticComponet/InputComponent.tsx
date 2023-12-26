import { Input, Switch, Select} from "antd"

export default function InputComponent(props: any) {

  const { onChange, type, defaultValue, options, selectNode, value } = props
  
  const getComponent = () => {
    switch (type) {
      case 'input': {
        return <Input value={selectNode[value] || ''} style={{width:'120px'}} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'switch': {
        return <Switch value={selectNode[value] || false} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'select': {
        return <Select value={selectNode[value] || defaultValue} style={{width:'120px'}}  options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
    }
  }

  return (
    <div>
      {getComponent()}
    </div>
  )
}
