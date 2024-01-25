import React, { useState } from 'react'
import { Upload as AntUpload, message} from 'antd'
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const beforeUpload =(file: any) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const getBase64 = (img: any,callback: Function) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}


export default function Upload(props: any) {
  const { action, comStyle } = props

  const [loading, setLoading] = useState(false)
  // 用来回显图片
  const [img, setImg] = useState("");

  /**
   * 将图片上传到服务器，然后更新图片内容
   * @param info 上传的图片信息
   * @returns 
   */
  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, () => {
        setLoading(false);
        setImg(`http://localhost:4000/images/` + info.file.response.filename);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <div>
      <AntUpload
        name="file"
        listType="picture-card"
        showUploadList={false}
        action={action || `http://localhost:4000/upload/album`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        style={comStyle}
      >
        {img ? (
          <img style={{width:'100px', height:'100px',...comStyle}} draggable={false} src={img} alt="avatar" />
        ) : (
          uploadButton
        )}
      </AntUpload>
    </div>
  )
}
