import { Carousel as AntCarousel } from 'antd';
import { useStateByProps } from '../../../../../../hook/actionHook';

export default function Carousel(props: any) {
  const { children, comStyle, comId } = props
  const autoplay = useStateByProps('autoplay', props, comId);
  const autoplaySpeed = useStateByProps('autoplaySpeed', props, comId);
  const dotPosition = useStateByProps('dotPosition', props, comId);
  const fade = useStateByProps('fade', props, comId);
  return (
    <div>
    <AntCarousel
      style={{width:'400px',height:'300px',border:'1px solid blue', ...comStyle}}
      autoplay={autoplay}
      autoplaySpeed={autoplaySpeed}
      dotPosition={dotPosition}
      fade={fade}
    >
      {
        children && children.map((item: any, index: number) => {
          return <div key={index}>
            {item}
          </div>
        })
      }
    </AntCarousel>
    </div>
  )
}
