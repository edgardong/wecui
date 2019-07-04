import { WECUIComponent } from './component'

interface ActionItem {
  text: string
  action: Function
}

export declare class WECActionsheet extends WECUIComponent {
  actions: ActionItem[]

  cancelText: string

  onModalClose: boolean
}