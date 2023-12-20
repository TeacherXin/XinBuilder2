import 
{
  TabletOutlined,
  FrownOutlined,
  DoubleRightOutlined
} from '@ant-design/icons';

interface ComponentIconMap {
  [key: string]: any
}

interface ComponentTextMap {
  [key: string]: string
}

const componentIconMap: ComponentIconMap = {
  Button: TabletOutlined,
  Icon: FrownOutlined,
  Input: DoubleRightOutlined
}

const componentTextMap: ComponentTextMap = {
  Button: '按钮',
  Icon: '图标',
  Input: '输入框'
}

export {
  componentIconMap,
  componentTextMap
}
