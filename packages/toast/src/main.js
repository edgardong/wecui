import Vue from 'vue';
import Main from './main.vue';

// 定义Toast组件的构造函数
let ToastConstructor = Vue.extend(Main);
// 定义一个toast池
let toastPool = [];

// 获取toast实例的方法
let getAnToastInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }

  return new ToastConstructor({
    el: document.createElement('div')
  })
}

// 移除元素
let removeInstanceDom = event => {
  if (event.target && event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
}

// 返回一个toast实例
let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
}

// 关闭对话框
ToastConstructor.prototype.close = function () {
  this.visiable = false;
  this.closed = true;
  this.$el.addEventListener('transitionend', removeInstanceDom);
  returnAnInstance(this);
}


let WECToast = (options = {}) => {
  // 显示的时间
  let duration = options.duration || 3000;

  let instance = getAnToastInstance();

  instance.closed = false;
  clearTimeout(instance.timer)

  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.iconClass = options.iconClass;
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visiable = true;
    instance.$el.removeEventListener('transitionend', removeInstanceDom);
    instance.timer = setTimeout(() => {
      if (instance.closed) {
        return;
      }
      instance.close();
    }, duration)
  })

  return instance;
};



// 导出Toast组件
export default WECToast;
