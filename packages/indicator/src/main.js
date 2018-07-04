import Vue from 'vue';
import Main from './main.vue';

let IndicatorConstruactor = Vue.extend(Main);
let indicatorPool = [];

// 获取实例
let getAnInstance = () => {

  if (indicatorPool.length > 0) {
    indicatorPool.splice(0, 1);
    return indicatorPool[0];
  }

  return new IndicatorConstruactor({
    el: document.createElement('div')
  })
}

// 设置instance实例
let setAnInstance = instance => {
  if (instance) {
    indicatorPool.push(instance);
  }
}

IndicatorConstruactor.prototype.close = function () {
  this.visiable = false;
  setAnInstance(this);
}

let WECIndicator = (options = {}) => {
  let instance = getAnInstance();
  instance.iconClass = options.iconClass;
  instance.text = options.text || '';
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visiable = true;

  })
}

export default WECIndicator;
