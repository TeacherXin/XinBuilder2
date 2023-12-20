import DesignTop from './designTop'
import LeftCom from './leftPart'
import MainCom from './mainPart'
import RightCom from './rightPart'

export default function Builder() {
  return (
    <div>
      <DesignTop />
      <LeftCom />
      <MainCom />
      <RightCom />
    </div>
  )
}
