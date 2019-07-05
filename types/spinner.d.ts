import { WECUIComponent } from './component'

export type SpinnerType = "snake" | "double" | "triple" | "fading"

export declare class WECSpinner extends WECUIComponent {
  color: string
  size: number
  type?: SpinnerType
}