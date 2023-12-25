import { Input, Switch, Select} from "antd"

export default function InputComponent(props: any) {

  const { onChange, type, defaultValue, options } = props
  
  const getComponent = () => {
    switch (type) {
      case 'input': {
        return <Input style={{width:'120px'}} defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'switch': {
        return <Switch defaultValue={defaultValue} onChange = {onChange}/>
      }
      case 'select': {
        return <Select style={{width:'120px'}}  options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
    }
  }

  return (
    <div>
      {getComponent()}
    </div>
  )
}
