import { Carousel as AntCarousel } from 'antd';

export default function Carousel(props: any) {
  const { children, autoplay, autoplaySpeed, dotPosition, fade, comStyle } = props
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
