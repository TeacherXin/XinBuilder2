import { Modal, Typography } from 'antd'
import Store from '../../../store';
import { getComById } from '../../../utils/nodeUtils';

const { Paragraph } = Typography;

export default function EditJson(props) {
  const {showJson, setShowJson, jsonComId} = props
  const comList = JSON.parse(JSON.stringify(Store.getState().comList))
  const selectNode = getComById(jsonComId, comList)

  return (
    <Modal
      open={showJson}
      onOk={() => {setShowJson(false)}}
      onCancel={() => {setShowJson(false)}}
      closable={false}
    >
      <Paragraph
        style={{
          maxWidth: 440,
          marginTop: 24,
        }}
      >
        <pre
          style={{
            border: 'none',
            height:'370px',
            width:'450px',
            overflow:'auto'
          }}
        >
          {JSON.stringify(selectNode, null, 2)}
        </pre>
      </Paragraph>
    </Modal>
  )
}
