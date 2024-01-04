import { Card as AntCard } from "antd"

export default function Card(props: any) {
  const { children, caption, hoverable, size, comStyle } = props
  return (
    <div>
      <AntCard
        size={size}
        hoverable={hoverable}
        title= {caption || "默认标题"}
        style={{width: '300px', height:'300px', ...comStyle}}
      >
        {
          children && children.map((item: any) => {
            return item
          })
        }
      </AntCard>
    </div>
  )
}
