import React from 'react'
import { Image as AntImage } from 'antd';

export default function Image(props) {
  const { alt, src, comStyle } = props
  return (
    <div>
      <AntImage
        width={comStyle?.width || 200}
        style={{...comStyle}}
        alt={alt}
        src= { src || "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" }
      />
    </div>
  )
}
