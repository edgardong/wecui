import { WECUIComponent, WECUIComponentSize } from './component'

export type ButtonType = "primary" | "warning" | "info" | "success" | "error" | "text"

export declare class WECButton extends WECUIComponent {
  /** define button color */
  color: string

  disabled: boolean

  plain: boolean

  size: WECUIComponentSize

  type: ButtonType
}