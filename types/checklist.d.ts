import { WECUIComponent } from './component'

export type ChecklistOptionType = {
  value: string,
  label: string,
  disabled: boolean,
}

export type ChecklistAlign = 'left' | 'right'

export declare class WECChecklist extends WECUIComponent {
  title: string

  options: ChecklistOptionType[] | object

  align: ChecklistAlign

  max: number

}