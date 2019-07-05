import { WECUIComponent } from './component'

export type RadioAlign = 'left' | 'right'
export type RadioOptionItem = {
  value: string | object,
  label: string,
  disabled: boolean
}

export declare class WECRadio extends WECUIComponent {
  title: string

  options: Array<RadioOptionItem> | object

  value: string | object

  align: RadioAlign
}