import Vue from 'vue';
import Main from './main.vue';

let MessageBoxConstruactor = Vue.extend(Main);

let messageBoxPool = [];
let instance;

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

let okHandler = (event) => {
  instance.close();
  return Promise.reject('error');
}

let WECMessageBox = {
  alert: (options = {}) => {
    if (!instance) {
      instance = getAnInstance();
    }
    instance.type = "alert";
    instance.title = options.title || '提示';
    instance.message = options.message || '';
    instance.okText = options.okText || '确定';
    instance.okHandler = okHandler;

    document.body.appendChild(instance.$el);


    Vue.nextTick(() => {
      instance.visiable = true;
    })

    return Promise.resolve('');

    // return new Promise(function (resolve, reject) {
    //   resolve();
    // });
  },
  close: () => {
    if (instance) {
      instance.visiable = false;
      setAnInstance(instance);
    }
  }
}

export default WECMessageBox;
