import { WECUIComponent } from './component'

export type DateType = 'date' | 'datetime' | 'time' | 'month'

export declare class WECDatetimePicker extends WECUIComponent {

  type: DateType

  title: string
}