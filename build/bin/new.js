'use strict'
// cmp -> component 需要新建的组件
// 1. 在 packages 文件加下新建 cmp 文件夹、 cmp/index.js、cmp/src、cmp/src/main.vue
// 2. 在 examples/docs 文件夹下新建 cmp.md
// 3. 在 examples/pages文件夹下新建 cmp.vue
// 4. 调整examples/src/nav.config.json 文件
// 5. 调整src/index.js文件，更新组件的全局注册

console.log()
process.on('exit', () => {
  console.log()
})

console.log(process.argv)

if (!process.argv[2]) {
  console.error('[组件类型]必填 - Please enter new component type (css/form/js)')
  process.exit(1)
}

if (!process.argv[3]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

let componentType = process.argv[2];

const groupIndex = componentType == 'css' ? 0 : componentType == 'js' ? 2 : 1;
const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[3]
const chineseName = process.argv[4] || componentname
const ComponentName = uppercamelcase(componentname)
const {
  version
} = require('../../package')

// 获取文件路径
const examplesPath = path.resolve(__dirname, '../../examples')
const packagesPath = path.resolve(__dirname, '../../packages')
const testPath = path.resolve(__dirname, '../../test/unit/specs')

// 文件内容及其详细路径
const examplesFiles = [{
    filename: `docs/${componentname}.md`,
    content: `## ${ComponentName} ${chineseName}
### 基本用法
###### 基本用法描述
  \`\`\`html
    <wec-${componentname} ></wec-${componentname}>
  \`\`\`
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| —  | —    | —   | — | — |
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| —  | —    | — |`
  },
  {
    filename: `pages/${componentname}.vue`,
    content: `
<template>
  <section class="demo-${componentname}">
    <wec-header :show-back="true" title="${ComponentName} ${chineseName}"></wec-header>
    <wec-${componentname}></wec-${componentname}>
  </section>
</template>
<script>
export default {
  props: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.demo-${componentname}{
  padding-top: 46px;
}
</style>`
  }
]

// 包文件中的内容
const packagesFiles = [{
    filename: `${componentname}/src/main.vue`,
    content: `<template>
  <div class="wec-${componentname}">
    hello ${componentname}~~~
  </div>
</template>
<script>
export default {
  name: 'wec-${componentname}',
  props: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>`
  },
  {
    filename: `wecui-css/src/${componentname}.scss`,
    content: `@import './common/var.scss';
@import './mixins/function';
@import './mixins/mixins';
@include b(${componentname}) {

}`
  }, {
    filename: `${componentname}/index.js`,
    content: `import WEC${ComponentName} from './src/main';
export default WEC${ComponentName};`
  }
]
// 单元测试文件
const testFiles = [{
  filename: `${componentname}.spec.js`,
  content: `import { createTest, destroyVM } from '../util'
import ${ComponentName} from 'packages/${componentname}'
describe('${ComponentName}', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a ${componentname}', () => {
    vm = createTest(${ComponentName})
    expect(vm.$el.classList.contains('wec-${componentname}')).to.be.true
  })
})`
}]

// 组件写入 components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}

componentsFile[componentname] = `./packages/${componentname}/index.js`

fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')

// 创建组件 example 文件
examplesFiles.forEach(file => {
  fileSave(path.join(examplesPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('')
console.log('examples 文件创建完成')
console.log('----------------------------')

// 创建组件 package 文件
packagesFiles.forEach(file => {
  fileSave(path.join(packagesPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('')
console.log('packages 文件创建完成')

// 创建组件 test 文件
testFiles.forEach(file => {
  fileSave(path.join(testPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('')
console.log('test 文件创建完成')

// 组件写入 nav 导航
const navPath = path.resolve(__dirname, '../../examples/src')
const navConfig = require('../../examples/src/nav.config.json')

console.log(navConfig)

for (var key in navConfig) {

  console.log(key)
  console.log(navConfig[key])


  let langItem = navConfig[key][0]
  langItem.groups[groupIndex].list.push({
    "path": `/${componentname}`,
    "title": `${ComponentName} ${chineseName}`,
    "name": `${componentname}`,
    "component": `/${componentname}`
  })
}


fileSave(path.join(navPath, 'nav.config.json'))
  .write(JSON.stringify(navConfig, null, '  '), 'utf8')
  .end('\n')

console.log('')
console.log('nav导航创建完成')

// 组件样式的引入到index.scss中去
let fs = require('fs');
const scssTemplate = `\n@import './${componentname}.scss';`;
const scssFilePath = path.resolve(__dirname, '../../packages/wecui-css/src/index.scss');

fs.appendFile(scssFilePath, scssTemplate, 'utf8', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

// 注册路由修改
var endOfLine = require('os').EOL;
var render = require('json-templater/string');
const componentsPath = path.resolve(__dirname, '../../src');
const componentsConfig = require('../../components.json');

var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\'';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';

var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/new.js' */
{{include}}

const components = [
{{install}}
]

// 提供plugins的install方法
const install = function (Vue, opt = {}) {
  // if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// install()

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports`;

var ComponentNames = Object.keys(componentsConfig);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
    name: componentName,
    component: name
  }));

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  list: listTemplate.join(',' + endOfLine)
});

fileSave(path.join(componentsPath, 'index.js'))
  .write(template)
  .end('\n')

// fs.writeFileSync(componentsPath, template);
console.log('[build entry] DONE:', componentsPath);


console.log('')
console.log('===组件创建成功===')
console.log('')
