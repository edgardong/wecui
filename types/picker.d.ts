import { WECUIComponent } from './component'

export type PickerSlotItem = {
  slotIndex: number,
  divider: boolean,
  options?: any[]
}

export declare class WECPicker extends WECUIComponent {
  title: string
  slots: PickerSlotItem
  onModalClose: boolean
  itemCount?: number
  itemHeight?: number
  value?: any[]
}