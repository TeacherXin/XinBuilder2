import { Badge as AntBadge } from 'antd'
import { useStateByProps } from '../../../../../../hook/actionHook'

export default function Badge(props: any) {
  const { children, comId } = props
  const color = useStateByProps('color', props, comId);
  const dot = useStateByProps('dot', props, comId);
  const status = useStateByProps('status', props, comId);
  const count = useStateByProps('count', props, comId);
  const size = useStateByProps('size', props, comId);
  return (
    <div style={{width:'80px', height:'80px', border:'1px solid green'}}>
        {
          children && children.map((item: any, index: number) => {
            return <AntBadge key={index} color={color} dot={dot} size={size} status={status} count={count || 5}>
              {item}
          </AntBadge>
          })
        }
    </div>
  )
}
