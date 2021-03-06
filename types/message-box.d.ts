import Vue from 'vue'

export type MessageBoxCloseAction = 'confirm' | 'cancel' | 'close'
export type MessageBoxData = MessageBoxInputData | MessageBoxCloseAction

export interface MessageBoxInputData {
  value: string,
  action: MessageBoxCloseAction
}

export interface WECMessageBoxOptions {
  title?: string
  okText?: string
  message: string
  visiable: boolean
}

export declare class MessageComponent extends Vue {
  close(): void
}

export interface WECMessage {
  alert(message: string): MessageComponent
}

export interface WECMessageBox {
  (options: string | WECMessageBoxOptions): Promise<MessageBoxData>

  alert(options: string | WECMessageBoxOptions): MessageComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    $messagebox: WECMessageBox
  }
}
