import Hello from './src/main';

/* istanbul ignore next */
Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello);
};

export default Hello;
