import Vue from 'vue';
import Main from './main.vue';

let MessageBoxConstruactor = Vue.extend(Main);

let messageBoxPool = [];
let instance, currentMsg;

// 获取实例
let getAnInstance = () => {

  if (messageBoxPool.length > 0) {
    let instance = messageBoxPool[0];
    messageBoxPool.splice(0, 1);
    return instance;
  }

  return new MessageBoxConstruactor({
    el: document.createElement('div')
  })
}

// 默认回调函数
let defaultCallback = (action, value) => {
  // 处理当前请求

  if (action === 'cancel' && currentMsg.reject) {
    currentMsg.reject(action);
  } else if (currentMsg.resolve) {

    if (value) {
      currentMsg.resolve({
        value,
        action
      });
    }
    currentMsg.resolve(action);
  }
}

let removeDom = event => {
  if (event.target && event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
}

let setAnInstance = instance => {
  if (instance) {
    messageBoxPool.push(instance);
  }
}

// 关闭
MessageBoxConstruactor.prototype.close = function () {
  this.visiable = false;
  setAnInstance(this);
}


// 展示消息框
let showNextMsg = () => {
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visiable = true;
  })
}

// 设置messagebox的选项内容
let setMessageBoxOptions = (options, callback) => {

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      currentMsg = {};
      currentMsg.resolve = resolve;
      currentMsg.reject = reject;
      currentMsg.options = options;

      showNextMsg();
    });
  } else {
    showNextMsg();
  }
}

let WECMessageBox = {
  alert: (options = {}) => {
    if (!instance) {
      instance = getAnInstance();
    }

    instance.callback = defaultCallback;
    instance.type = "alert";
    instance.title = options.title || '提示';
    instance.message = typeof options == 'string' ? options : options.message;
    instance.okText = options.okText || '确定';

    return setMessageBoxOptions(options);

  },
  confirm: (options = {}) => {

    if (!instance) {
      instance = getAnInstance();
    }

    instance.callback = defaultCallback;
    instance.type = "confirm";
    instance.title = options.title || '提示';
    instance.message = typeof options == 'string' ? options : options.message;
    instance.okText = options.okText || '确定';
    instance.cancelText = options.cancelText || '取消';

    return setMessageBoxOptions(options);
  },
  prompt: (options = {}) => {
    if (!instance) {
      instance = getAnInstance();
    }

    instance.callback = defaultCallback;
    instance.type = "prompt";
    instance.title = typeof options == 'string' ? options : options.title || '提示';
    instance.okText = options.okText || '确定';
    instance.cancelText = options.cancelText || '取消';

    return setMessageBoxOptions(options);
  },
  close: () => {
    if (instance) {
      // inputValue
      currentMsg = null;
      instance.visiable = false;
      setAnInstance(instance);
    }
  }
}

export default WECMessageBox;
