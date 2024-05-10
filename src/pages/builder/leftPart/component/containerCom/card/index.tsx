import { Card as AntCard } from "antd"
import { useStateByProps } from "../../../../../../hook/actionHook"

export default function Card(props: any) {
  const { children, comStyle, comId } = props
  const caption = useStateByProps('caption', props, comId);
  const hoverable = useStateByProps('hoverable', props, comId);
  const size = useStateByProps('size', props, comId);
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
