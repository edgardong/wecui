import { WECUIComponent } from './component'

export interface ActionItem {
  text: string
  action: Function
}

export declare class WECActionsheet extends WECUIComponent {
  actions: ActionItem[]

  cancelText: string

  onModalClose: boolean
}