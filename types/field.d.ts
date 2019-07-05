import { WECUIComponent } from './component'

export type FieldSateType = 'success' | 'error' | 'loading' | 'warning'

export declare class WECField extends WECUIComponent {

  label: string

  rows: number

  placeholder?: string

  type: string

  state: FieldSateType
}