export interface ActionMap {
    [key: string]: string[]
}

const actionMap = {
    Button: ['onClick'],
    FloatButton: ['onClick'],
    Icon: ['onClick'],
    Input: ['onChange'],
    Switch: ['onChange'],
    Checkbox: ['onChange']
}

export {
    actionMap
  }