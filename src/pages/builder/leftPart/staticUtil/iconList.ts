import 
{
  TabletOutlined,
  FrownOutlined,
  DoubleRightOutlined,
  CheckOutlined,
  InfoCircleOutlined,
  StarOutlined,
  LoginOutlined,
  FormOutlined
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
  Input: DoubleRightOutlined,
  Checkbox: CheckOutlined,
  Radio: InfoCircleOutlined,
  Rate: StarOutlined,
  Switch: LoginOutlined,
  Form: FormOutlined
}

const componentTextMap: ComponentTextMap = {
  Button: '按钮',
  Icon: '图标',
  Input: '输入框',
  Checkbox: '多选框',
  Radio: '单选框',
  Rate: '评分',
  Switch: '开关',
  Form: '表单'
}

export {
  componentIconMap,
  componentTextMap
}
