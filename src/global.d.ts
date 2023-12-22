import { PageJson } from "./interface/pageJson";

declare global {
  interface Window {
    nowCom: ANY,
    renderCom: ANY,
    comList: ANY,
    setComList: ANY,
  }
}