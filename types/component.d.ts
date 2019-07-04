import Vue from 'vue'

export declare class WECUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

export type WECUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

export type WECUIHorizontalAlignment = 'left' | 'center' | 'right'