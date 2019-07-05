import { WECUIComponent } from './component'

export type ToastPositionType = "top" | "middle" | "bottom"

export declare class WECToast extends WECUIComponent {
  message: string

  visiable?: boolean

  iconClass: string

  iconColor: string

  position: ToastPositionType
}