import Vue from 'vue';
import Main from './main.vue';

let IndicatorConstruactor = Vue.extend(Main);
let indicatorPool = [];

let instance;

// 获取实例
let getAnInstance = () => {

  if (indicatorPool.length > 0) {
    let instance = indicatorPool[0];
    indicatorPool.splice(0, 1);
    return instance;
  }

  return new IndicatorConstruactor({
    el: document.createElement('div')
  })
}

let removeDom = function (event) {
  if (event.target && event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
}

// 设置instance实例
let setAnInstance = instance => {
  if (instance) {
    indicatorPool.push(instance);
  }
}

IndicatorConstruactor.prototype.close = function () {
  this.visiable = false;
  this.$el.addEventListener('transitionend', removeDom);
  // clearTimeout(this.timer)
  setAnInstance(this);
}



let WECIndicator = {

  open: (options = {}) => {
    if (!instance) {
      instance = getAnInstance();
    }
    // let duration = options.duration || 3000;
    instance.iconClass = options.iconClass || '';
    instance.spinnerClass = options.spinnerClass || '';
    instance.text = options.text || '';

    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.$el.removeEventListener('transitionend', removeDom);
      instance.visiable = true;
      // instance.timer = setTimeout(() => {
      //   instance.close();
      // }, duration);
    })
  },
  close() {
    if (instance) {
      instance.visiable = false;
    }
  }
}

export default WECIndicator;
