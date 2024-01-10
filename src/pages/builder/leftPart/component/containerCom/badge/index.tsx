import { Badge as AntBadge } from 'antd'

export default function Badge(props: any) {
  const { children, color, dot, size, status, count } = props
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
