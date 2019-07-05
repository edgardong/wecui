import Vue from 'vue'
import { WECUIComponent, WECUIComponentSize, WECUIHorizontalAlignment } from './component'

import { WECActionsheet } from './actionsheet'
import { WECButton } from './button'
import { WECCell } from './cell'
import { WECChecklist } from './checklist'
import { WECDatetimePicker } from './datetime-picker'
import { WECField } from './field'
import { WECHeader } from './header'
import { WECIndicator } from './indicator'
import { WECMessageBox } from './message-box'
import { WECNavbar } from './navbar'
import { WECPicker } from './picker'
import { WECPopup } from './popup'
import { WECRadio } from './radio'
import { WECRange } from './range'
import { WECSearch } from './search'
import { WECSpinner } from './spinner'
import { WECSwipe } from './swipe'
import { WECSwipeItem } from './swipe-item'
import { WECSwitch } from './switch'
import { WECTabContainer } from './tab-container'
import { WECTabContainerItem } from './tab-container-item'
import { WECTabItem } from './tab-item'
import { WECTabber } from './tabber'
import { WECToast } from './toast'

export function install(vue: typeof Vue): void

export class Actionsheet extends WECActionsheet { }
export class Button extends WECButton { }
export class Cell extends WECCell { }
export class Checklist extends WECChecklist { }
export class DatetimePicker extends WECDatetimePicker { }
export class Field extends WECField { }
export class Header extends WECHeader { }
export class Indicator extends WECIndicator { }
export class MessageBox extends WECMessageBox { }
export class Navbar extends WECNavbar { }
export class Picker extends WECPicker { }
export class Popup extends WECPopup { }
export class Radio extends WECRadio { }
export class Range extends WECRange { }
export class Search extends WECSearch { }
export class Spinner extends WECSpinner { }
export class Swipe extends WECSwipe { }
export class SwipeItem extends WECSwipeItem { }
export class Switch extends WECSwitch { }
export class TabContainer extends WECTabContainer { }
export class TabContainerItem extends WECTabContainerItem { }
export class TabItem extends WECTabItem { }
export class Tabber extends WECTabber { }
export class Toast extends WECToast { }
